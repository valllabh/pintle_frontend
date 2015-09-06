(function () {
	'use strict';
	angular.module('FragmentSidebar', [])
	.controller('sidebar', ['$rootScope', '$scope', 'menuService', function($rootScope, $scope, menuService) {
		$scope.loaded = new Date();
		menuService.getMenuItems(function(response){
			$scope.links = response.links;
		});
	}])
	.directive('menu', ['$rootScope', '$timeout', function($rootScope, $timeout) {
		return {
			restrict: 'C',
			templateUrl: 'scripts/fragments/left-sidebar/view/menu.html',
			link: function(s, e, a) {
				// var $e = e;
				// var $body = $('body');
				// var $header = $('.header .nav-bar');
				// var $window = $(window);
				// var $menuToogle = $(a.trigger);
				// var $menu = $e.find('.nav-menu');
				// var $mask = $(a.mask);
				// var classOpen = 'open';
				// var classHasSidebarMenu = 'has-sidebar-menu';
				// var callTimeout;
				// var initMenu = function(){
				// 	if (callTimeout){ $timeout.cancel(callTimeout);}
				// 	callTimeout = $timeout(function() {
				// 		$menu.removeData('mm');
				// 		$menu.addClass('metismenu');
				// 		$menu.find('> li').addClass('active');
				// 		$menu.metisMenu({
				// 			toggle: false
				// 		});
				// 		$menu.find('li a > .glyphicon').addClass('arrow');
				// 		$menu.find('li ul a > .glyphicon').removeClass('arrow').addClass('glyphicon-plus plus-times');
				// 	}, 250);
				// };
				// var closeMenu = function(){
				// 	$e.removeClass(classOpen);
				// 	$menuToogle.removeClass(classOpen);
				// 	$body.removeClass(classHasSidebarMenu);
				// 	$mask.removeClass(classOpen);
				// };
				// var openMenu = function(){
				// 	$e.addClass(classOpen);
				// 	$menuToogle.addClass(classOpen);
				// 	$body.addClass(classHasSidebarMenu);
				// 	$mask.addClass(classOpen);
				// };
				// var menuHeight = function(){
				// 	$e.height( $window.height() - $header.height() );
				// };
				// s.$on('$routeChangeStart', closeMenu);
				// s.$on('$includeContentLoaded', initMenu);
				// e.on('$destroy', function() {
				// 	closeMenu();
				// });
				// $mask.on('click', function(){
				// 	closeMenu();
				// });
				// $menuToogle.click(function(){
				// 	$(this).hasClass(classOpen) ? closeMenu() : openMenu();
				// });
				// $window.on('resize', function(){
				// 	menuHeight();
				// });
				// menuHeight();
			}
		};
	}])
	.factory('menuService',[
		'$http',
		'$cookieStore',
		'$rootScope',
		'$timeout',
		function (
			$http,
			$cookieStore,
			$rootScope,
			$timeout
		) {
			var service = {};
			service.getMenuItems = function (callback) {
				$timeout(function(){
					var response = {
						'projectTitle': 'My Website Title',
						'links': [
							{
								'name': 'OGSM Dashboard',
								'url': '#/ogsm',
								'icon':'fa fa-dashboard fa-fw',
								'links': [
									{
										'name': 'OGSM',
										'url': '#/ogsm/filters'
									},
									{
										'name': 'COCKPIT VIEW',
										'url': '#/cockpit/filters'
									},
									{
										'name': 'GOALS',
										'url': '#/goals/filters',
										'links': [
											{
												'name': 'NON-FINANCIAL',
												'url': '#/goals/non-financial/filters'
											},
											{
												'name': 'FINANCIAL',
												'url': '#/goals/financial/filters'
											},
											{
												'name': 'FINANCIAL %',
												'url': '#/goals/financial-percent/filters'
											}
										]
									},
									{
										'name': 'Top 10',
										'url': '#/top10/filters'
									},
									{
										'name': 'CEO View',
										'url': '#/ceoview/filters',
										'links': [
											{
												'name': 'SUMMARY',
												'url': '#/ceoview/summary/filters'
											},
											{
												'name': 'MARKETING',
												'url': '#/ceoview/marketing/filters'
											},
											{
												'name': 'STUDENT RECRUITMENT',
												'url': '#/ceoview/student-recruitment/filters'
											},
											{
												'name': 'ACADEMIC',
												'url': '#/ceoview/academic/filters'
											},
											{
												'name': 'STAKEHOLDER',
												'url': '#/ceoview/stakeholder/filters'
											},
											{
												'name': 'OPERATIONS',
												'url': '#/ceoview/operations/filters'
											}
										]
									},
									{
										'name': 'L2 View',
										'url': '#/l2/summary/filters',
										'links': [
											{
												'name': 'SUMMARY',
												'url': '#/l2/summary/filters'
											},
											{
												'name': 'MARKETING',
												'url': '#/l2/marketing/filters'
											},
											{
												'name': 'STUDENT RECRUITMENT',
												'url': '#/l2/student-recruitment/filters'
											},
											{
												'name': 'ACADEMIC',
												'url': '#/l2/academic/filters'
											},
											{
												'name': 'STAKEHODLER',
												'url': '#/l2/stakeholder/filters'
											},
											{
												'name': 'OPERATIONS',
												'url': '#/l2/operations/filters'
											}
										]
									},
									{
										'name': 'WORKPLAN VIEW',
										'url': '#/workplan',
										'links':[
											{
												'name': 'T2 STUDENT RECRUITMENT',
												'url': '#/workplan/t2-student-recruitment/filters',
												'links': [
													{
														'name': 'Overall',
													},
													{
														'name': 'LSR-1',
													},
													{
														'name': 'LSR-2',
													},
													{
														'name': 'ISR-1',
													},
													{
														'name': 'ISR-2',
													},
													{
														'name': 'FINANCIAL ASPECT',
													},
													{
														'name': 'OTHERS',
													},
													{
														'name': 'TOP GUN',
													}
												]
											},{
												'name': 'ACADEMIC',
												'url': '#/workplan/academic/filters'
											},{
												'name': 'ACADEMIC SERVICES',
												'url': '#/workplan/academic-services/filters'
											},{
												'name': 'ADMIN & ESTATE MGMT',
												'url': '#/workplan/admin-and-estate-mgmt/filters'
											},{
												'name': 'BUSINESS DEVELOPMENT',
												'url': '#/workplan/business-development/filters'
											},{
												'name': 'FINANCE & CONTROLLING',
												'url': '#/workplan/finance-and-controlling/filters'
											},{
												'name': 'HUMAN RESOURCE',
												'url': '#/workplan/human-resource/filters'
											},{
												'name': 'INFORMATION & COMM',
												'url': '#/workplan/information-and-comm/filters'
											},{
												'name': 'MARKETING',
												'url': '#/workplan/marketing/filters'
											},{
												'name': 'QUALITY ASSURANCE',
												'url': '#/workplan/quality-assurance/filters'
											},{
												'name': 'SCHOOL OPERATIONS',
												'url': '#/workplan/school-operations/filters'
											},{
												'name': 'STUDENT AFFAIRS',
												'url': '#/workplan/student-affairs/filters'
											},{
												'name': 'STUDENT RECRUITMENT',
												'url': '#/workplan/student-recruitment/filters'
											},{
												'name': 'ADMISSION & DATA MANAGEMENT',
												'url': '#/workplan/admission-and-data-management/filters'
											},{
												'name': 'TOP GUN',
												'url': '#/workplan/top-gun/filters'
											}
										]
									}
								]
							},
							{
								'name': 'Financial Dashboard',
								'url': '#/financial/filters',
								'icon':'fa fa-bar-chart-o fa-fw',
								'className': 'dropdown',
								'links': [
									{
										'name': 'Financial',
										'url': '#/financial/all/filters',
										'links': [
											{
												'name': 'ALL',
												'url': '#/financial/all/filters'
											},
											{
												'name': 'BUS & COM',
												'url': '#/financial/bus-and-com/filters'
											},
											{
												'name': 'LANG',
												'url': '#/financial/lang/filters'
											},
											{
												'name': 'SET',
												'url': '#/financial/set/filters'
											},
											{
												'name': 'SAF',
												'url': '#/financial/saf/filters'
											},
											{
												'name': 'SLPS',
												'url': '#/financial/slps/filters'
											},
											{
												'name': 'SPGS',
												'url': '#/financial/SPGS/filters'
											},
											{
												'name': 'OTHERS',
												'url': '#/financial/others/filters'
											}
										]
									},
									{
										'name': 'Financial Home',
										'url': '#/financial-home/filters'
									},
									{
										'name': 'Financial Cockpit',
										'url': '#/financial-cockpit/all/filters',
										'links': [
											{
												'name': 'ALL',
												'url': '#/financial-cockpit/all/filters'
											},
											{
												'name': 'BUS & COM',
												'url': '#/financial-cockpit/bus-and-com/filters'
											},
											{
												'name': 'LANG',
												'url': '#/financial-cockpit/lang/filters'
											},
											{
												'name': 'SET',
												'url': '#/financial-cockpit/set/filters'
											},
											{
												'name': 'SAF',
												'url': '#/financial-cockpit/saf/filters'
											},
											{
												'name': 'SLPS',
												'url': '#/financial-cockpit/slps/filters'
											},
											{
												'name': 'SPGS',
												'url': '#/financial-cockpit/spgs/filters'
											},
											{
												'name': 'OTHERS',
												'url': '#/financial-cockpit/others/filters'
											}
										]
									},
									{
										'name': 'PROFIT & LOSS TREND',
										'url': '#/profit-and-loss-trend/all/filters',
										'links': [
											{
												'name': 'ALL',
												'url': '#/profit-and-loss-trend/all/filters'
											},
											{
												'name': 'BUS & COM',
												'url': '#/profit-and-loss-trend/bus-and-com/filters'
											},
											{
												'name': 'Lang',
												'url': '#/profit-and-loss-trend/lang/filters'
											},
											{
												'name': 'SET',
												'url': '#/profit-and-loss-trend/set/filters'
											},
											{
												'name': 'SAF',
												'url': '#/profit-and-loss-trend/saf/filters'
											},
											{
												'name': 'SLPS',
												'url': '#/profit-and-loss-trend/slps/filters'
											},
											{
												'name': 'SPGS',
												'url': '#/profit-and-loss-trend/spgs/filters'
											},
											{
												'name': 'Others',
												'url': '#/profit-and-loss-trend/others/filters'
											}
										]
									},
									{
										'name': 'PROFIT & LOSS',
										'url': '#/profit-and-loss',
										'links': [
											{
												'name': 'ALL',
												'url': '#/profit-and-loss/all/filters'
											},
											{
												'name': 'BUS & COM',
												'url': '#/profit-and-loss/bus-and-com/filters'
											},
											{
												'name': 'Lang',
												'url': '#/profit-and-loss/lang/filters'
											},
											{
												'name': 'SET',
												'url': '#/profit-and-loss/set/filters'
											},
											{
												'name': 'SAF',
												'url': '#/profit-and-loss/saf/filters'
											},
											{
												'name': 'SLPS',
												'url': '#/profit-and-loss/slps/filters'
											},
											{
												'name': 'SPGS',
												'url': '#/profit-and-loss/spgs/filters'
											},
											{
												'name': 'OTHERS',
												'url': '#/profit-and-loss/others/filters'
											}
										]
									},
									{
										'name': 'Balance Sheet',
										'url': '#/balance-sheet/filters'
									},
									{
										'name': 'Cash Flow',
										'url': '#/cash-flow/filters'
									},
									{
										'name': 'NWC',
										'url': '#/nwc/filters'
									},
									{
										'name': 'FINANCIAL RATIO',
										'url': '#/financial-ratio/summarized',
										'links': [
											{
												'name': 'FINANCIAL RATIOS SUMMARISED',
												'url': '#/financial-ratio/summarized/filters'
											},
											{
												'name': 'FINANCIAL RATIOS DETAIL',
												'url': '#/financial-ratio/detail/filters'
											}
										]
									},
									{
										'name': 'SALARY & HEADCOUNT',
										'url': '#/salary-head-count/filters'
									},
									{
										'name': 'HIRE & RESIGNEE',
										'url': '#/hire-resignee/filters'
									},
									{
										'name': 'STUDENT POP',
										'url': '#/student-pop/filters'
									},
									{
										'name': 'BRIDGE',
										'url': '#/bridge/filters'
									},
									{
										'name': 'RUN RATE',
										'url': '#/run-rate/filters'
									}
								]
							}
						]
					};
					callback(response);
				}, 1000);
			};
			return service;
		}
	]
);
}());
