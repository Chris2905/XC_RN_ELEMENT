import Storage, {LoadParams} from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

interface storageData {
    key: string;
    id?: string | undefined;
    data: any;
    expires?: number | null | undefined;
}

const storageConfig = {
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24 * 7,
    enableCache: true,
    sync: {
        // async user() {
        //     return null;
        // },
    },
};
const storage = new Storage(storageConfig);

const loadData = (params: LoadParams) => {
    return new Promise((resolve, reject) => {
        storage
            .load(params)
            .then((ret) => {
                resolve(ret);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const deleteData = (key: string) => {
    return storage.remove({key: key});
};

const addData = (Obj: storageData) => {
    return storage.save(Obj);
};

export {loadData, deleteData, addData};

export default storage;
