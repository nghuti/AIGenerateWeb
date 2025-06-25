import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe your vision',
      description: 'Enter a phrase or command to describe the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the magic',
      description: 'Our advanced AI will turn your text into unique images in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & share',
      description: 'Instantly download the image and share it with the world through our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Nguyen Minh Tri',
        role:'Graphic Designer',
        stars:5,
        text:`I will have a high salary .`
    },
    {
        image:profile_img_2,
        name:'Mr.Nghuti',
        role:'Content Creator',
        stars:5,
        text:`I will get married with a nice and wealthy husband.`
    },
    {
        image:profile_img_1,
        name:'Tri Nguyen',
        role:' Graphic Designer',
        stars:4,
        text:`My family will be happy and healthy.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Use for personality.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Use for bussiness .'
    },
    {
      id: 'Bussiness',
      price: 250,
      credits: 5000,
      desc: 'Use for enterprise.'
    },
  ]