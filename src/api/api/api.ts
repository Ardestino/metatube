export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './questions.service';
import { QuestionsService } from './questions.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [GroupsService, QuestionsService, UsersService];
