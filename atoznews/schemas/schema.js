// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './components/blockContent'

import post from './post'
import jobDescriptor from './pageBuilderSchemas/jobDescriptor'
import jobOpening from './jobOpening'
import aboutCard from './aboutCard'
import faq from './faq'
import home from './pages/home'
import contentSection from './pageBuilderSchemas/contentSection'
import ctaButton from './components/ctaButton'
import testingServices from './pages/testingServices'
import ourScientists from './pages/ourScientists'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    blockContent,
    jobOpening,
    aboutCard,
    faq,
    // pages
    home,
    testingServices,
    ourScientists,
    // components
    ctaButton,
    // page builder schemas
    jobDescriptor,
    contentSection,
  ]),
})
