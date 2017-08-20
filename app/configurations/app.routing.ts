import {Router, RouterModule} from '@angular/router'

import {PreventUnsavedChanges} from '../shared/routeAccess/prevent-unsaved-changes.service'

import {HomeComponent}      from '../../app/components/home/home.component'
import {UserComponent}      from '../../app/components/user/user.component'
import {UserFormComponent}  from '../../app/components/user/form/user-form.component'
import {PostComponent}      from '../../app/components/post/post.component'
import {NotFoundComponent}  from '../../app/not-found.component'


export const routing = RouterModule.forRoot([
                                                {path : '', component: HomeComponent },
                                                {path : 'home', component: HomeComponent },
                                                {path : 'user', component: UserComponent},
                                                {
                                                    path : 'user/form', 
                                                    component: UserFormComponent,
                                                    canDeactivate: [PreventUnsavedChanges]
                                                },
                                                {
                                                    path : 'user/form/:id', 
                                                    component: UserFormComponent,
                                                    canDeactivate: [PreventUnsavedChanges]
                                                },
                                                {path : 'post', component: PostComponent},
                                                {path : '**',   component: NotFoundComponent}
                                            ]);