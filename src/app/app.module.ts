import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoryFrameComponent } from './story-frame/story-frame.component';
import { StorySequenceComponent } from './story-sequence/story-sequence.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [StoryFrameComponent, StorySequenceComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
