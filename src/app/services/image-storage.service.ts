import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor(private storage: Storage) {}

  guardarImagenUsuario(Usuario: User, fichero: any){
    const imgRef = ref(this.storage, `ImagenesUsuarios/${Usuario.userName}/${Usuario.id}`);
    return uploadBytes(imgRef, fichero)
  }

  cargarUrlImagenUsuario(fullpat: string){
    const imgRef = ref(this.storage, fullpat);
    return getDownloadURL(imgRef);
  }
}
