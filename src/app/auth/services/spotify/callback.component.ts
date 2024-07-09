
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './spotify-auth.services';

@Component({
  selector: 'app-callback',
  template: '<p>Authenticating...</p>'
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        console.log('Authorization code:', code);
        this.authService.getAccessToken(code).then(() => {
          console.log('Token obtained successfully');
          this.router.navigate(['/']);
        }).catch(error => {
          console.error('Error obtaining access token', error);
          this.router.navigate(['/not-found']);
        });
      } else {
        console.error('Authorization code not found');
        this.router.navigate(['/not-found']);
      }
    });
  }
}
