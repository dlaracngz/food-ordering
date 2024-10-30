"use client";
import Image, { StaticImageData } from "next/image";
import product from "@/public/pizzza2.png";
import sizeImage from "@/public/images/size.png";
import { useState } from "react";
import { addProduct } from "@/redux/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ExtraItem {
  id: number;
  name: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
  size: string;
  quantity: number;
  extraOptions: ExtraItem[];
}

const ProductDetail = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Pizza 1",
      image: product,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aspernatur, nisi reprehenderit ad natus nesciunt distinctio nostrum amet quisquam fugiat.",
      price: 10,
      quantity: 1,
      size: "Small",
      extraOptions: [
        {
          id: 1,
          name: "ketchup",
          price: 10,
        },
        {
          id: 2,
          name: "mayonnaise",
          price: 15,
        },
        {
          id: 3,
          name: "hotSauce",
          price: 20,
        },
      ],
    },
  ];

  const [size, setSize] = useState(0); // Ürünün seçili boyutunu (Small,Medium,Large) tutar. Varsayılan olarak Small
  const sizePrices = [10, 20, 30]; // Small, Medium ve Large Fiyatları
  const [price, setprice] = useState(sizePrices[0]); // Toplam fiyatı tutmak için.
  const extraItems: ExtraItem[] = [
    { id: 1, name: "ketchup", price: 10 },
    { id: 2, name: "mayonnaise", price: 15 },
    { id: 3, name: "hotSauce", price: 20 },
  ];
  const [extras, setExtras] = useState<ExtraItem[]>([]);

  const card = useSelector((state: RootState) => state.card.products);
  console.log(card);
  const dispatch = useDispatch();

  const handleClick = () => {
    const newProduct = {
      ...products[0],
      size: ["Small", "Medium", "Large"][size],
      extraOptions: extras,
      price: price,
      quantity: 1,
    };
    dispatch(addProduct(newProduct));
  };
  const total = useSelector((state: RootState) => state.card.total);
  const quantity = useSelector((state: RootState) => state.card.quantity);
  console.log(total);
  console.log(quantity);

  const handleSize = (sizeIndex: number) => {
    const difference = sizePrices[sizeIndex] - sizePrices[size]; // Fark işlemi
    setSize(sizeIndex); // Yeni boyut güncellendi.
    changePrice(difference);
  };
  // sizeIndex parametresi ile seçilen boyutun fiyatını, mevcut boyut fiyatından çıkararak totalPrice güncellenir. setSize ile size değeri güncellenir ve changePrice ile fiyat değişikliği uygulanır.

  const changePrice = (number: number) => {
    setprice(price + number);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ExtraItem
  ) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]); //Bunu Cart bileşenine göndermek için yazdık.
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id)); //Bunu Cart bileşenine göndermek için yazdık.
    }
  };
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center my-16">
        <div>
          <Image
            src={product}
            alt=""
            className="max-w-[600px] w-full"
            objectFit="contain"
          />
        </div>
        <div>
          <h1 className="font-dancing text-[40px] font-bold mb-4">
            Good Pizza
          </h1>
          <u className="text-primary text-xl font-bold">${price}</u>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            aspernatur, nisi reprehenderit ad natus nesciunt distinctio nostrum
            amet quisquam fugiat.
          </p>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Choose the size</h2>
            <div className="my-6 flex gap-12">
              <div
                className="relative cursor-pointer"
                onClick={() => handleSize(0)}
              >
                <Image
                  src={sizeImage}
                  alt=""
                  width={30}
                  height={30}
                  className="relative"
                />
                <span className="absolute -top-2 -right-6 text-xs px-1 rounded-xl bg-primary">
                  Small
                </span>
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => handleSize(1)}
              >
                <Image
                  src={sizeImage}
                  alt=""
                  width={45}
                  height={45}
                  className="relative"
                />
                <span className="absolute -top-2 -right-8 text-xs px-1 rounded-xl bg-primary">
                  Medium
                </span>
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => handleSize(2)}
              >
                <Image
                  src={sizeImage}
                  alt=""
                  width={60}
                  height={60}
                  className="relative"
                />
                <span className="absolute -top-2 -right-4 text-xs px-1 rounded-xl bg-primary">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Choose additional ingredients</h2>
            <div className="my-5 flex gap-x-2 items-center">
              {extraItems.map((extra) => (
                <label
                  key={extra.id}
                  htmlFor={extra.name}
                  className="flex items-center gap-x-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={extra.name}
                    id={extra.name}
                    className="w-5 h-5 accent-primary"
                    onChange={(e) => handleChange(e, extra)}
                  />
                  <span className="text-sm font-semibold">{extra.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
