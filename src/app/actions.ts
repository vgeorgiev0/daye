'use server';
import { isXml } from '@/lib/utils';
import { TamponPack } from '@/types/tampons';
import { xml2json } from 'xml-js';

export async function getDataFromApi() {
  try {
    const response = await fetch(`${process.env.API_URL}`, {
      cache: 'force-cache',
    });
    const data = await response.json();
    const allProducts: TamponPack[] = [];
    data.forEach((product: any) => {
      const currentProduct = {
        price: product.price,
        currency: product.currency,
        productImage: product.productImage,
        id: '',
        tampons: [],
      };

      for (const key in product) {
        if (typeof product[key] === 'number') {
          currentProduct.price = product[key];
        } else if (Array.isArray(product[key])) {
          currentProduct.tampons = product[key];
        } else if (isXml(product[key])) {
          const parsedXml = xml2json(product[key]);
          const formattedTampons = JSON.parse(parsedXml);
          const tamponsArray = formattedTampons.elements[0].elements;
          const tampons = tamponsArray.map((tampon: any) => {
            return {
              size: tampon.elements.find(
                (element: any) => element.name === 'size'
              ).elements[0].text,
              coating: tampon.elements.find(
                (element: any) => element.name === 'coating'
              ).elements[0].text,
              amount: Number(
                tampon.elements.find(
                  (element: any) => element.name === 'amount'
                ).elements[0].text
              ),
            };
          });
          currentProduct.tampons = tampons;
        } else {
          currentProduct.productImage = product[key];
        }
      }
      const id = data.indexOf(product);
      currentProduct.id = id.toString();
      allProducts.push(currentProduct);
    });
    return allProducts;
  } catch (error) {
    console.error(
      `An error occurred while fetching data from the API. [${error}]`
    );
  }
}
