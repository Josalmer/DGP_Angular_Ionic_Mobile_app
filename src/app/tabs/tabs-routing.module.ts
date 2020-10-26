import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'my-groups',
				loadChildren: () => import('../my-groups/my-groups.module').then((m) => m.MyGroupsPageModule)
			},
			{
				path: 'tab2',
				loadChildren: () => import('../tab2/tab2.module').then((m) => m.Tab2PageModule)
			},
			{
				path: 'my-profile',
				loadChildren: () => import('../my-profile/my-profile.module').then((m) => m.MyProfilePageModule)
			},
			{
				path: '',
				redirectTo: '/tabs/my-profile',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/my-profile',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TabsPageRoutingModule {}
