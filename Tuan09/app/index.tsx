import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, FlatList, KeyboardAvoidingView } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect, useCallback } from 'react';
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from 'expo-sqlite';

interface ItemEntity {
  id: number;
  done: boolean;
  value: string;
}

export default function Index() {
  return (
    <SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
      <Home></Home>
    </SQLiteProvider>
  );
}

function Home() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [text, setText] = useState('');
  const [todoItems, setTodoItems] = useState<ItemEntity[]>([]);
  const [doneItems, setDoneItems] = useState<ItemEntity[]>([]);
  const [showDoneItem, setShowDoneItem] = useState(true)
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('')

  const refetchItems = useCallback(() => {
    async function refetch() {
      await db.withExclusiveTransactionAsync(async () => {
        setTodoItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            false
          )
        );
        setDoneItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            true
          )
        );
      });
    }
    refetch();
  }, [db]);

  useEffect(() => {
    refetchItems();
  }, []);

  const renderItem = ({ item }: { item: ItemEntity }) => (
    <View style={styles.taskRow}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={async () => {
          await toggleItemAsync(db, item.id, item.done)
          await refetchItems()
        }}
      >
        {item.done ?
          <Text style={styles.checkMark}>✔︎</Text>
          : <Text style={styles.checkMark}>✖</Text>
        }
      </TouchableOpacity>

      <Text numberOfLines={1} style={styles.taskText}>
        {item.value}
      </Text>

      <View style={styles.rightGroup}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={async () => {
            setEditText(item.value)
            setEditId(item.id)
          }}
        >
          <Text style={styles.editIcon}>✏︎</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={async () => {
            await deleteItemAsync(db, item.id)
            refetchItems()
          }}
        >
          <Text style={styles.editIcon}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>TW</Text>
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title}>Hi Twinkle</Text>
            <Text style={styles.subtitle}>Have agrate day a head</Text>
          </View>
        </View>

        <View style={styles.inputWrap}>
          <View style={styles.inputIcon}>
            <Text style={{ color: "#2bb673", fontSize: 18 }}>▦</Text>
          </View>
          <TextInput
            value={editId ? editText : text}
            onChangeText={editId ? setEditText : setText}
            placeholder="input your job"
            placeholderTextColor="#777"
            style={styles.input}
            onSubmitEditing={async () => {
              if (editId) {
                if (editText && editId) {
                  await updateItemSync(db, editId, editText);
                  await refetchItems();
                  setEditId(null);  
                  setEditText('');
                }
              } else {
            
                if (text) {
                  await addItemAsync(db, text);
                  await refetchItems();
                  setText('');
                }
              }
            }}
          />
        </View>
      </View>


      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 10, marginTop: 10 }}>
        <TouchableOpacity onPress={() => setShowDoneItem(true)} style={{ backgroundColor: 'green', padding: 10, borderRadius: 20 }}>
          <Text style={{ color: 'white' }}>Done ✔</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowDoneItem(false)} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 20 }}>
          <Text style={{ color: 'white' }}>Not Done ✖</Text>
        </TouchableOpacity>
      </View>

      {todoItems.length != 0 && (
        <FlatList
          data={showDoneItem ? doneItems : todoItems}
          keyExtractor={(i) => i.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity style={styles.fab} onPress={() => router.push('/addtodo')}>
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

async function addItemAsync(db: SQLiteDatabase, text: string): Promise<void> {
  if (text !== '') {
    await db.runAsync(
      'INSERT INTO items (done, value) VALUES (?, ?);',
      false,
      text
    );
  }
}

async function toggleItemAsync(
  db: SQLiteDatabase,
  id: number,
  done: boolean = false
): Promise<void> {
  await db.runAsync('UPDATE items SET done = ? WHERE id = ?;', !done, id);
}

async function deleteItemAsync(db: SQLiteDatabase, id: number): Promise<void> {
  await db.runAsync('DELETE FROM items WHERE id = ?;', id);
}

async function updateItemSync(
  db: SQLiteDatabase,
  id: number,
  value: string
): Promise<void> {
  await db.runAsync('UPDATE items SET value = ? WHERE id = ?;', value, id);
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version') ?? { user_version: 0 };
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
  PRAGMA journal_mode = 'wal';
  CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT);
  `);
    currentDbVersion = 1;
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}


const styles = StyleSheet.create({

  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 28,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  inputIcon: {
    width: 34,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cfeee4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#e8fff6",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    color: "#222",
  },

  safe: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 18 },
  header: { marginTop: 6, marginBottom: 12 },
  backBtn: { position: "absolute", left: 0, top: 6, padding: 8 },
  backArrow: { fontSize: 22, color: "#333" },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EAD8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: { fontWeight: "700", color: "#5B2DA5" },
  title: { fontSize: 22, fontWeight: "700", color: "#111" },
  subtitle: { color: "#8c8c8c", fontWeight: "700" },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 8,
    padding: 12,
    marginTop: 18,
    backgroundColor: "#fff",
  },
  searchIcon: { marginRight: 8, fontSize: 18, color: "#666" },
  searchInput: { flex: 1, padding: 0 },

  list: { paddingTop: 18, paddingBottom: 120 },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e7e9",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginBottom: 18,
    // soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 6,
  },
  checkBox: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2bb673",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#fff",
  },
  checkMark: { color: "#2bb673", fontSize: 18, fontWeight: "700" },
  taskText: { flex: 1, fontSize: 18, fontWeight: "700", color: "#222" },
  rightGroup: { flexDirection: "row", alignItems: "center" },
  colorTag: {
    width: 36,
    height: 20,
    backgroundColor: "#e53935",
    borderRadius: 4,
    marginRight: 12,
  },
  editBtn: { padding: 6 },
  editIcon: { color: "#ff6b6b", fontSize: 18 },

  fab: {
    position: "absolute",
    alignSelf: "center",
    bottom: 28,
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#15c5d6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#15c5d6",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  fabPlus: { color: "#fff", fontSize: 44, lineHeight: 44 },
});