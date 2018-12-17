export const testDataBookings = {
  bookings: [
    {
      client: {
        first_name: 'Tioluwani',
        last_name: 'Kolawole',
        email: 'kolawole8tiolu@gmial.com',
        phone_number: '08078657912',
        address: '37 Alara street, Yaba, Onike, Lagos',
      },
      tutor: {
        first_name: 'James',
        last_name: 'Sowore',
        email: 'james.sowore@gmail.com',
        phone_number: '2348078569732',
      },
      sessions: [
        {
          price: 4000,
          status: 'completed',
          date: 1545045658609,
          no_of_hours: 5,
          booking_order: 'ABCXYZ65',
        },
      ],
      reviews: [
        {
          tutor: 'james.sowore@gmail.com',
          commenter: 'kolawole8tiolu@gmial.com',
          review: 'I am satisfied',
          date: 1545045658609,
          score: 5,
        },
      ],
      transactions: [
        {
          amount: 5000,
          credit: 0,
          type: '',
          transaction_type: '',
        },
      ],
      status: 'completed',
      createdAt: 1528758000000,
      updatedAt: 1545045658609,
    },
  ],
};
