import type {ListingItemData} from './App'


function Listing({items}:ListingItemData[]=[]) {
    console.log(items)
    return (
        <div className='item-list'>
            {items.map(listingItemData => (
                <div className='item'>
                    <div className='item-image'>
                        <a href={listingItemData.url}>
                            <img src={listingItemData.MainImage_url_570xN} />
                        </a>
                    </div>
                    <div className='item-details'>
                        <p className="item-title">{listingItemData.title}</p>
                        <p className="item-price">{listingItemData.currency_code}{listingItemData.price}</p>
                        <p className={'item-quantity level-' + (listingItemData.quantity <= 10 ? 'low' : 
                                                                listingItemData.quantity <= 20 ? 'medium' : 'high' )}>{listingItemData.quantity} left</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Listing