import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'showtime';
  showSearch = false; // 控制搜索框显示的属性
  searchTerm: string = ''; // Add searchTerm property

  toggleSearch(event?: MouseEvent): void {
    // 如果已经显示搜索输入框，那么点击按钮应该是提交搜索
    if (this.showSearch) {
      this.onSearch();
    } else {
      this.showSearch = true;
      event?.preventDefault(); // 阻止表单提交
    }
  }

  onSearch(): void {
    // 执行搜索操作，比如调用服务或者跳转页面
    console.log('Searching for: ', this.searchTerm);
    this.showSearch = false; // 搜索后隐藏输入框
  }
}
