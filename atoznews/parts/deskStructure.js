// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Navigation')
    .items([
      S.listItem()
        .title('Favorites')
        .child(
          S.list()
            .title('Favorites')
            .items([resourcesItem, careerItem, faqItem, bioItem])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([homepage, testingServices, ourScientists])
        ),
      S.divider(),
      ...S.documentTypeListItems(),
    ])

// list definitions
const faqItem = S.listItem()
  .title('FAQs')
  .child(
    S.documentList()
      .title('FAQs')
      .filter('_type == "faq"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const careerItem = S.listItem()
  .title('Career Opportunities')
  .child(
    S.documentList()
      .title('Career Opportunities')
      .filter('_type == "jobOpening"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const resourcesItem = S.listItem()
  .title('Resources')
  .child(
    S.documentList()
      .title('Resources')
      .filter('_type == "post"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const bioItem = S.listItem()
  .title('Staff Bios')
  .child(
    S.documentList()
      .title('Staff Bios')
      .filter('_type == "aboutCard"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const homepage = S.listItem()
  .title('Homepage')
  .child(S.document().title('Homepage').schemaType('home'))
const testingServices = S.listItem()
  .title('Testing Services')
  .child(S.document().title('Testing Services').schemaType('testingServices'))
const ourScientists = S.listItem()
  .title('Our Scientists')
  .child(S.document().title('Our Scientists').schemaType('ourScientists'))
