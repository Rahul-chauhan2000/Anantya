import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, title, subtitle }) => {
  return (
    <section className="py-20 pb-32 bg-brand-beige/30 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && <span className="section-subtitle">{subtitle}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-6"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
