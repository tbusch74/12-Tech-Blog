
const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 3
  },
  {
    title:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus felis, eu dignissim ex. Aenean malesuada sed ipsum in tincidunt. Suspendisse nec sollicitudin odio, et interdum tellus. Quisque lectus ipsum, consectetur a venenatis at, sagittis quis purus. Nunc bibendum risus felis, fermentum ultricies arcu aliquam vitae. In hac habitasse platea dictumst. Fusce venenatis nisl a consectetur gravida. Etiam varius ligula vestibulum pharetra ultrices. Sed faucibus ultrices orci vitae aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus commodo egestas lobortis. Vivamus vestibulum risus vel fermentum malesuada. Mauris sed nisl non ligula euismod scelerisque. Integer et felis a nisl consectetur tincidunt.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
