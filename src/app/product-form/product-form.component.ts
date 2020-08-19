import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categories.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import "rxjs-compat/add/operator/take";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  categories$ ;
  product = {};
  id;
  constructor( private categoryService : CategoryService 
              ,private productService : ProductService
              ,private router : Router
              ,private route : ActivatedRoute
              ,private toster : ToastrService) { 

    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id) this.productService.getProduct(this.id).take(1).subscribe(p => this.product =p)

  }

  save(product){
    if(this.id) this.productService.updateProduct(this.id,product);
    else this.productService.create(product);

    this.toster.success('Successfully Saved');

    this.router.navigate(['/admin/products']);

  }

  delete(){
    if( !confirm('Are you sure , you want to delete this product?'))return;

    this.productService.deleteProduct(this.id);
    this.toster.error('Product Successfully Deleted');
    this.router.navigate(['/admin/products']);

  }

 
  ngOnInit() {
  }

}
