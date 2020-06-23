require('dotenv').config();
const bcrypt = require('bcryptjs');

const hashAaron = bcrypt.hashSync(process.env.USER, 10)

exports.seed = function(knex) {
    return knex('mentee').del()
      .then(function () {
        return knex('mentee').insert([
          {id: 1, first_name: 'Aaron', last_name: 'Smith', city: 'Atlanta', state: 'Georgia', password: hashAaron, email:'aaronsmith@email.com', title: 'UX Designer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: ' As a lost college student studying UX Design at the University of Georgia, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion for web design with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 2, first_name: 'Remi', last_name: 'Quinn', city: 'Tampa', state: 'Florida', password: 'remiquinn', email: 'remiquinn@email.com', title: 'Lawyer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Law at the University of Florida, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 3, first_name: 'Sian', last_name: 'Whitworth', city: 'San Jose', state: 'California', password: 'sianwhitworth', email: 'sianwhitworth@email.com', title: 'Preschool Teacher', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Education at the University of California, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 4, first_name: 'Roman', last_name: 'Bassett', city: 'Denver', state: 'Colorado', password: 'romanbassett', email: 'romanbassett@email.com', title: 'Graphic Designer', image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Design at the University of Colorado, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 5, first_name: 'Tommy', last_name: 'Moyer', city: 'New York', state: 'New York', password: 'tommymoyer', email: 'tommymoyer@email.com', title: 'Photographer', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying photography at NYU, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 6, first_name: 'Karl', last_name: 'Hassan', city: 'Atlanta', state: 'Georgia', password: 'karlhassan', email: 'karlhassan@email.com', title: 'UX Designer', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying UX Design at UGA, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 7, first_name: 'Terrell', last_name: 'Barry', city: 'Fresno', state: 'California', password: 'terrellbarry', email: 'terrellbarry@email.com', title: 'Lawyer', image: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Law at the University of California, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 8, first_name: 'Karis', last_name: 'Devlin', city: 'Madison', state: 'Wisconsin', password: 'karisdevlin', email: 'karisdevlin@email.com', title: 'Software Engineer', image: 'https://images.unsplash.com/photo-1505499663565-1ec2a8397f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Computer Science at the University of Wisconsin, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 9, first_name: 'Autumn', last_name: 'Proctor', city: 'Jacksonville', state: 'Florida', password: 'autumnproctor', email: 'autumnproctor@email.com', title: 'Photographer', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Photography at the University of Florida, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 10, first_name: 'Jolene', last_name: 'Rees', city: 'Cleveland', state: 'Ohio', password: 'jolenerees', email: 'jolenerees', title: 'UX Designer', image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying UX Design at Ohio State, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 11, first_name: 'Nimrah', last_name: 'Parkes', city: 'New Orleans', state: 'Louisana', password: 'nimrahparkes', email: 'nimrahparkes@email.com', title: 'Logistician', image: 'https://images.unsplash.com/photo-1507019778-966512024b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying at the University of Louisana, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 12, first_name: 'Ryker', last_name: 'Redman', city: 'Anaheim', state: 'California', password: 'rykerredman', email: 'rykerredman@email.com', title: 'Nursing', image: 'https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Nursing at the University of Califprnia, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 13, first_name: 'Teagan', last_name: 'Hester', city: 'Columbus', state: 'Ohio', password: 'teaganhester', email: 'teaganhester@email.com', title: 'Software Engineer', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Computer Science at Ohio State, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 14, first_name: 'Alton', last_name: 'Bullock', city: 'Phoenix', state: 'Arizona', password: 'altonbullock', email: 'altonbullock@email.com', title: 'Photographer', image: 'https://images.unsplash.com/photo-1587120020260-a4d140e6b149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Photography at the University of Arizona, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 15, first_name: 'Pearce', last_name: 'Ahmed', city: 'San Francisco', state: 'California', password: 'pearceahmed', email: 'pearceahmed@email.com', title: 'Social Worker', image: 'https://images.unsplash.com/photo-1531100935765-c7ba8e8a4513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying  at the University of California, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 16, first_name: 'Abigale', last_name: 'Walker', city: 'Queens', state: 'New York', password: 'abigalewalker', email: 'abigalewalker@email.com', title: 'Paramedic', image: 'https://images.unsplash.com/photo-1522038801702-e8a873c33c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying at the NYU, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 17, first_name: 'Franky', last_name: 'Alcock', city: 'Oxford', state: 'Mississippi', password: 'frankyalcock', email: 'frankalcock@email.com', title: 'Epidemiologist', image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying at the Missisippi State, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 18, first_name: 'Paula', last_name: 'Goldsmith', city: 'Nashville', state: 'Tennessee', password: 'paulagoldsmith', email: 'paulagoldsmith@email.com', title: 'Software Engineer', image: 'https://images.unsplash.com/photo-1517869880919-7b200c6e4563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying Computer Science at the University of Tennessee, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 19, first_name: 'Asa', last_name: 'Morales', city: 'Raleigh', state: 'North Carolina', password: 'asamorales', email: 'asamorales@email.com', title: 'Dentist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying at the University of North Carolina, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},
          {id: 20, first_name: 'Aston', last_name: 'Dawson', city: 'New York', state: 'New York', password: 'astondawson', email: 'astondawson@email.com', title: 'Logistician', image: 'https://images.unsplash.com/photo-1517504340-653989dff891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60', description: 'As a lost college student studying at NYU, I decided I needed to finally figure out what to do with my life. I consider myself incredibly lucky to be doing what I do, and I try to share my passion with everyone that I work with. If you would like to consider mentoring me, I would love to speak with you.'},

        ]);
      });
  };
  