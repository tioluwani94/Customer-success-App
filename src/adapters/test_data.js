export const testDataBookings = {
  bookings: [
    {
      order: 'ABSCD567',
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
          review:
            'Lorem Khaled Ipsum is a major key to success. To succeed you must believe. When you believe, you will succeed. Give thanks to the most high. Surround yourself with angels. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Give thanks to the most high. Let’s see what Chef Dee got that they don’t want us to eat. Another one. Bless up. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We don’t see them, we will never see them',
          date: 1545045658609,
          score: 5,
        },
      ],
      transactions: [
        {
          amount: 5000,
          credit: 0,
          type: '',
          transaction_type: 'card',
        },
      ],
      remarks: [
        {
          title: 'Closed account',
          date: 1545045658609,
          content:
            'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
        },
      ],
      status: 'scheduled',
      createdAt: 1528758000000,
      updatedAt: 1545045658609,
    },
    {
      order: 'ABSCD567',
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
        {
          price: 4000,
          status: 'ongoing',
          date: 1545045658609,
          no_of_hours: 5,
          booking_order: 'ABCXYZ89',
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
      status: 'initialized',
      createdAt: 1528758000000,
      updatedAt: 1545045658609,
    },
  ],
};

export const testDataGetBooking = order => {
  return testDataBookings.bookings.find(
    booking => booking.order.toLowerCase() === order.toLowerCase()
  );
};

export const filterBookingsByStatus = status => {
  return testDataBookings.bookings.filter(
    booking => booking.status.toLowerCase() === status.toLowerCase()
  );
};

export const searchAllBookings = search => {
  return testDataBookings.bookings.filter(booking => {
    return (
      booking.tutor.email.toLowerCase().includes(search.toLowerCase()) ||
      booking.client.email.toLowerCase().includes(search.toLowerCase()) ||
      booking.order.toLowerCase().includes(search.toLowerCase())
    );
  });
};
