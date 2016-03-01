
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('albums').del(),

    // Inserts seed entries
    knex('albums').insert({
        id: 1,
        artist: 'Kendrick Lamar',
        name: 'To Pimp a Butterfly',
        genre: 'Hip Hop',
        stars: 5,
        explicit: true
    }),
    knex('albums').insert({
        id: 2,
        artist: 'Danielle Ate the Sandwich',
        name: 'Danielle Ate the Sandwich',
        genre: 'Indie Alternative',
        stars: 4,
        explicit: true
    }),
    knex('albums').insert({
        id: 3,
        artist: 'Lord Huron',
        name: 'Strange Trails',
        genre: 'Indie Rock',
        stars: 3,
        explicit: false
    })
  );
};
