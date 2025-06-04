(function() {
  'use strict';

  angular.module('edulinkerApp', [])
    .controller('MainController', function() {
      var vm = this;

      vm.solutions = [
        {
          icon: 'school',
          title: 'Schools',
          text: 'Easily browse trainings, find qualified trainers, and manage your planning effortlessly.'
        },
        {
          icon: 'person',
          title: 'Trainers',
          text: 'Manage clients, schedule trainings, and communicate seamlessly from a single dashboard.'
        },
        {
          icon: 'business',
          title: 'Companies',
          text: 'Compare trainings, track team progress, and order customized sessions with ease.'
        }
      ];

      vm.features = [
        { icon: 'search', text: 'Search Trainings & Trainers' },
        { icon: 'event', text: 'Integrated Calendar & Notifications' },
        { icon: 'forum', text: 'Built-in Communication' },
        { icon: 'folder', text: 'File and Material Sharing' },
        { icon: 'star_rate', text: 'Ratings & Feedback System' },
        { icon: 'account_circle', text: 'Professional Profiles for Trainers & Organizations' }
      ];

      vm.audience = [
        'School Representatives',
        'Company Managers',
        'Project Coordinators',
        'Trainers & Educators',
        'Education Freelancers',
        'Nonprofit Organizations'
      ];
    });
})();
