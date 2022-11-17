import sanityClient from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

export const client= sanityClient({
    projectId:'zsz1pbav',
    dataset:'production',
    apiVersion:'2021-11-16',
    useCdn:true,
    token:'sklAqF33WtbqfpYRd822c46DaCylWpe8rgEBLqC652hAlMYsquorLHXzk0pYpZSYkGqDP1bzP7w19rGYrkUsblpwkr2LtMEn57wjQhkc39fer4U6iMN1AkWo5fRDuyr6BHiIOHTpFrKRpo2lx7t4Bk3VLCMSWqThZPjJOU0SCJKeVGgxryaO',   
});

const builder= imageUrlBuilder(client);

 export const urlFor=(source)=>builder.image(source);
