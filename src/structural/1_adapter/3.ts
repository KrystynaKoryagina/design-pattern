class Database {
  private db: Map<number, string> = new Map();

  save(key: number, value: string): void {
    this.db.set(key, value);
  }
}

class PersistentDB {
  savePersist(data: Object): void {
    console.log('data', data);
  }
}

class PersistentDBAdapter extends Database {
  database: PersistentDB;

  constructor(database: PersistentDB) {
    super();

    this.database = database;
  }

  save(key: number, value: string) {
    this.database.savePersist({ key, value });
  }
}

function run(db: Database) {
  db.save(1, 'first');
}

run(new PersistentDBAdapter(new PersistentDB()));
