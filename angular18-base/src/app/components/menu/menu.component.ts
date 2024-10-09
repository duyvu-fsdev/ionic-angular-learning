import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
 selector: 'app-menu',
 templateUrl: './menu.component.html',
 styleUrls: ['./menu.component.scss', '../common.scss'],
})
export class MenuComponent {
 menus: any[] = [];
 onAdding: boolean = false;
 onEditing: boolean = false;
 onDeleting: boolean = false;
 menuSelected: any | null;
 isFormDirty: boolean = false;
 preForm: any;

 formData = this.fb.group({
  name: ['', Validators.required],
  price: [0, Validators.required],
  category: ['', Validators.required],
 });

 constructor(private menuService: MenuService, private fb: FormBuilder) {
  this.menuService.initMenus();
  this.menuService.menus$.subscribe(
   (data) => (this.menus = data as any[]),
   (e) => console.log(e),
  );
 }

 ngOnInit() {}

 onAdd() {
  this.onAdding = true;
  this.resetForm();
 }
 onEdit(item: any) {
  this.onEditing = true;
  this.menuSelected = item;
  this.preForm = this.fb.group({
   name: [item.name, Validators.required],
   price: [item.price, Validators.required],
   category: [item.category, Validators.required],
  });
  this.formData = this.fb.group({
   name: [item.name, Validators.required],
   price: [item.price, Validators.required],
   category: [item.category, Validators.required],
  });
  this.checkDirty();
 }
 onDelete(item: any) {
  this.onDeleting = true;
  this.menuSelected = item;
 }
 onSubmit() {
  if (this.onAdding) {
   const data = { ...this.formData.value, createdAt: new Date(), updatedAt: new Date() };
   this.menuService.addMenu(data).subscribe(
    () => this.menuService.initMenus().finally(() => (this.onAdding = false)),
    (e) => console.log(e),
   );
  }
  if (this.onEditing) {
   const data = { ...this.formData.value, id: this.menuSelected.id, updatedAt: new Date() };
   this.menuService.updateMenu(data, this.menuSelected.id).subscribe(
    () => this.menuService.initMenus().finally(() => (this.onEditing = false)),
    (e) => console.log(e),
   );
  }
  if (this.onDeleting) {
   this.menuService.deleteMenu(this.menuSelected.id).subscribe(
    () => this.menuService.initMenus().finally(() => (this.onDeleting = false)),
    (e) => console.log(e),
   );
  }
 }
 cancle() {
  this.onAdding = false;
  this.onEditing = false;
  this.onDeleting = false;
  this.menuSelected = null;
  this.resetForm();
 }

 resetForm() {
  this.formData = this.fb.group({
   name: ['', Validators.required],
   price: [0, Validators.required],
   category: ['', Validators.required],
  });
 }

 checkDirty() {
  if (this.onEditing) this.isFormDirty = JSON.stringify(this.formData.value) != JSON.stringify(this.preForm.value);
 }
}
