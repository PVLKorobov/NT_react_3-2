import './App.css'
import listingData from './assets/data/etsy.json?raw'
import Listing from './Listing'

// interface ListingImage {
//   listing_image_id:number,
//   hex_code:string,
//   red:number,
//   green:number,
//   blue:number,
//   hue:number,
//   saturation:number,
//   brightness:number,
//   is_black_and_white:boolean,
//   creation_tsz:number,
//   listing_id:number,
//   rank:string,
//   url_75x75:string,
//   url_170x135:string,
//   url_570xN:string,
//   url_fullxfull:string,
//   full_height:number,
//   full_width:number
// }

// interface ListingItem {
//     listing_id:number,
//     state:string,
//     user_id:number,
//     category_id:number,
//     title:string,
//     description:string,
//     creation_tsz:number,
//     ending_tsz:number,
//     original_creation_tsz:number,
//     last_modified_tsz:number,
//     price:number,
//     currency_code:string,
//     quantity:number,
//     sku:string[],
//     tags:string[],
//     category_path:string[],
//     category_path_ids:number[],
//     materials:string[],
//     shop_section_id:number,
//     featured_rank:string,
//     state_tsz:number,
//     url:string,
//     views:number,
//     num_favorers:number,
//     shipping_template_id:number,
//     processing_min:number,
//     processing_max:number,
//     who_made:string,
//     is_supply:boolean,
//     when_made:string,
//     item_weight:number,
//     item_weight_unit:string,
//     item_length:number,
//     item_width:number,
//     item_height:number,
//     item_dimensions_unit:string,
//     is_private:boolean,
//     recipient:string,
//     occasion:string,
//     style:string,
//     non_taxable:boolean,
//     is_customizable:boolean,
//     is_digital:boolean,
//     file_data:string,
//     should_auto_renew:boolean,
//     language:string,
//     has_variations:boolean,
//     taxonomy_id:number,
//     taxonomy_path:string[],
//     used_manufacturer:boolean,
//     MainImage:ListingImage
// }

interface ListingItemData {
  listing_id:number,
  url:string,
  MainImage_url_570xN:string,
  title:string,
  currency_code:string,
  price:number,
  quantity:number
}


function App() {
  const test = JSON.parse(listingData)

  const FilteredLisingItems:ListingItemData[]  = test.filter(
    listingItemData => listingItemData.listing_id !== undefined &&
    listingItemData.url !== undefined &&
    listingItemData.MainImage !== undefined &&
    listingItemData.title !== undefined &&
    listingItemData.currency_code !== undefined &&
    listingItemData.price !== undefined &&
    listingItemData.quantity !== undefined)
  .map(listingItemData => ({
    listing_id: listingItemData.listing_id,
    url: listingItemData.url,
    MainImage_url_570xN: listingItemData.MainImage.url_570xN,
    title: listingItemData.title,
    currency_code: listingItemData.currency_code,
    price: listingItemData.price,
    quantity: listingItemData.quantity
  }))

  return (
    <Listing items={FilteredLisingItems}/>
  )
}


export default App
export type {ListingItemData}