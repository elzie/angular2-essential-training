<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lz-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lz-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
>>>>>>> 01744e80458bd71127097f3467752037aad862fd
