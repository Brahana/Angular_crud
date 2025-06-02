import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-simple-crud';
  name="";
  pendingItems:string[]=[];
  editIndex:number|null=null;
  deleteIndex:number|null=null;
  //completedIndex:number|null=null;
  completedItems:string[]=[];

 save() {
  if (this.name.trim() !== '') {
    if (this.editIndex !== null) {
      this.pendingItems = this.pendingItems.map((val, i) => {
        if (i === this.editIndex) return this.name.trim();
        return val;
      });
    } else {
      this.pendingItems.push(this.name.trim());
    }
  }

  this.editIndex = null;
  this.name = '';
}

  
  

  edit(editIndex:number)
  {
    
    this.editIndex=editIndex
    const editData=this.pendingItems.find((val,i)=>{
      return editIndex==i;
    })
    if(editData)
          this.name=editData;
  }

  delete(deleteIndex:number)
{
 this.pendingItems=this.pendingItems.filter((val,i)=>{
  return deleteIndex!=i;
 })
}

complete(completedIndex:number)
{
  const completedItem=this.pendingItems.find((val,i)=>{
 
    return completedIndex==i
  })
  this.pendingItems=this.pendingItems.filter((val,i)=>{
    return completedIndex!=i;
  })
  if(completedItem)
  this.completedItems.push(completedItem)
console.log(this.completedItems);

}
}


