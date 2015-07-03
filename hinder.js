Profiles = new Mongo.Collection('profiles');

if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    profiles = [
      { 
        name: 'Ani', 
        login: 'ani',
        birthday: Date.parse('21-May-1986'),
        skin: 'wheat',
        caste: 'brahmin',
        profession: 'Chemical Engineer',
        company: 'Genentech',
        university: "John's Hopkins",
        grad_school: null,
        highest_degree: 'B.S.',
        family_bio: "We are family of 4 from Fremont. Ani's sister is a doctor in Philadelphia",
        bio: "Ani is a very sweet boy. He has an engineering degree from hopkins"
      },
      { 
        name: 'Lily', 
        login: 'lily',
        birthday: Date.parse('21-May-1986'),
        skin: 'fair',
        caste: 'brahmin',
        profession: 'Designer Consultant',
        company: 'Consulting Firm',
        university: "Brandeis",
        grad_school: 'Georgetown University',
        highest_degree: 'M.S.',
        family_bio: "We are family of 4 from New Jersey. Lily's sister just married happily and are hoping for the same for Lily.",
        bio: "Lily is very easily excited and full of life. She will bring your son to new adventures!"
      }
    ];

    // manually insert each profile in
    _.each(profiles, function(profile) {
      Profiles.insert(profile);
    });
        
  });
}
