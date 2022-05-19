import blog from '../public/resources/blog.jpg'
import media from '../public/resources/media_coverage.jpg'
import newsletter from '../public/resources/newsletter_signup.jpg'
import press from '../public/resources/press_release.jpg'
import whitePapers from '../public/resources/white_papers.jpg'

export const testingServicesData = [
  {
    label: 'Cannabinoid Potency',
    url: '/testing-services/cannabinoids',
  },
  {
    label: 'Terpene Profile',
    url: '/testing-services/terpenes',
  },
  {
    label: 'Residual Solvents',
    url: '/testing-services/residual-solvents',
  },
  {
    label: 'Pesticides',
    url: '/testing-services/pesticides',
  },
  {
    label: 'Mycotoxins',
    url: '/testing-services/mycotoxins',
  },
  {
    label: 'Heavy Metals',
    url: '/testing-services/heavy-metals',
  },
  {
    label: 'Water Activity',
    url: '/testing-services/water-activity',
  },

  {
    label: 'Vitamin E Acetate',
    url: '/testing-services/vitamin-e-acetate',
  },
  {
    label: 'Microbial Contaminants',
    url: '/testing-services/microbials',
  },
]

export const labTechnologiesData = [
  {
    label: 'HPLC',
    url: '/lab-technologies/hplc',
  },
  {
    label: 'LC-MS',
    url: '/lab-technologies/lcms',
  },
  {
    label: 'GC-MS',
    url: '/lab-technologies/gcms',
  },
  {
    label: 'ICP-MS',
    url: '/lab-technologies/icpms',
  },
  {
    label: 'GC-MS',
    url: '/lab-technologies/gcms',
  },
]

export const customerPortalData = [
  {
    label: 'Account Registration',
    url: '/customer-portal/register',
  },
  {
    label: 'Customer Login',
    url: 'https://atoz-labs.grow.labware.cloud/login.form',
    external: true,
  },
]

export const resourcesSublinkData = [
  {
    label: 'Press Releases',
    url: '/resources/press-releases/1',
    image: press,
  },
  {
    label: 'Media Coverage',
    url: '/resources/media-coverage/1',
    image: media,
  },
  {
    label: 'Blog',
    url: '/resources/blog/1',
    image: blog,
  },
  {
    label: 'White Papers',
    url: '/resources/white-papers/1',
    image: whitePapers,
  },
  {
    label: 'Newsletter Signup',
    url: '/resources/newsletter-signup',
    image: newsletter,
  },
]

export const contactSublinkData = [
  {
    label: 'Careers',
    url: '/contact-us/careers',
  },
  {
    label: 'FAQs',
    url: '/contact-us/faqs',
  },
]

export const linkData = [
  {
    label: 'Testing Services',
    url: '/testing-services',
    sublinks: testingServicesData,
  },
  {
    label: 'Our Scientists',
    url: '/our-scientists',
  },
  {
    label: 'Contact Us',
    url: '/contact-us',
    sublinks: contactSublinkData,
  },
  {
    label: 'Resources',
    url: '/resources',
    sublinks: resourcesSublinkData,
  },
  {
    label: 'Customer Portal',
    url: '/customer-portal',
    sublinks: customerPortalData,
  },
]
