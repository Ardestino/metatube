import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AIService } from './api/aI.service';
import { ApiService } from './api/api.service';
import { ChannelService } from './api/channel.service';
import { CommentsService } from './api/comments.service';
import { KeyWordService } from './api/keyWord.service';
import { ProyectosService } from './api/proyectos.service';
import { TopicService } from './api/topic.service';
import { TopicCategoryService } from './api/topicCategory.service';
import { UsersService } from './api/users.service';
import { VideoService } from './api/video.service';
import { YoutubeService } from './api/youtube.service';
import { YoutubeDatabaseService } from './api/youtubeDatabase.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
