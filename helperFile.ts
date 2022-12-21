// This is just a helper file. Just ignore it

// Use this pattern to generate fake DB on https://json-generator.com/

[
  '{{repeat(45)}}',
  {
    _id: '{{objectId()}}',
    name: 'Restaurant {{company()}}',
    category: '{{random("Pizza", "Burgeri", "Asiatica", "Libaneza", "Greceasca", "Orientala", "Paste", "Traditionala" )}}',
    picture: '{{ random("https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80", "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",) }}',
    delivery: {
      time: '{{integer(20, 40)}}',
      fee: '{{integer(3, 40)}}',
      promotion: '{{random(true, false)}}'
    },
    rating: '{{integer(1, 90)}}',
    discount: '{{random(true, false)}}',
    discountValue: '{{integer(1, 6)}}0',
    
    foodItems: [
    '{{repeat(24)}}',
    {
      foodName: '{{random("Pizza Margerita", "Pizza Capriciosa", "Pizza Romana", "Pizza Quatro Stagioni", "Paste Carbonara", "Paste Alforno")}}',
      foodDescription: '{{lorem(10, 10)}}'
    }
    ]
    
  }
]