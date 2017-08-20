import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service'
import { UserService } from '../../../app/components/user/user.service'
import { Post } from '../../../app/objects/post'
import { User } from '../../../app/objects/user'
@Component({
    selector: 'post',
    templateUrl: './app/components/post/post.component.html'
})
export class PostComponent implements OnInit {

    public posts: Post[] = [];
    constructor(private _service: PostService, private _serviceUser: UserService) {
    }

    ngOnInit(): void {

        this._service
            .getAllPosts()
            .subscribe(s => {
                for (let item of s) {
                    let user: User;
                    this._serviceUser.getUserById(item.userId).subscribe(s => {
                        user = new User(s);
                        item.userName = user.name;
                        this.posts.push(new Post(item));
                    });
                }
            });
    }
}