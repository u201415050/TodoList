import Realm from 'realm';
class Item {
    name;
    status;
    static schema = {
      name: 'Item',
      properties: {
        name: 'string',
        status: 'bool',
      },
    };
    toggleStatus=()=>{
        realm.write(()=>{
            this.status = !this.status
        })
    }
    editName=(val)=>{
        realm.write(()=>{
            this.name = val
        })
    }
    deleteItem=()=>{
        realm.write(()=>{
            realm.delete(this)
        })
    }
}

const version = 1
const encryptionKey = new Int8Array(64);

const realm = new Realm({
  encryptionKey,
  schema: [
    Item
  ],
  schemaVersion: version,
});

export function getTable(name){
  
  return realm.objects(name)
}
export function createRow(name, data, update) {
    update = update || false;
    console.log({ name, data, update });
  
    realm.write(() => {
      realm.create(name, data, update);
    });
}
export function deleteRow(object) {
    realm.write(() => {
      realm.delete(object);
    });
}
export function editRow(object, toObject) {
    realm.write(() => {
      object = {...object, toObject}
    });
}
export default realm;
