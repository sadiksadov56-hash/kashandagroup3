const Hero = () => {
  return (
    <section style={{ paddingTop: '72px', background: '#f9f9f7', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 72px);
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 64px;
          background: #f9f9f7;
        }
        .hero-right {
          position: relative;
          overflow: hidden;
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-right:hover img { transform: scale(1.04); }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #888;
        }
        .hero-tag::before {
          content: '';
          width: 24px;
          height: 1px;
          background: #888;
        }
        .hero-title {
          font-size: 72px;
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 300;
        }
        .hero-cta {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-primary {
          background: #1a1a1a;
          color: white;
          border: none;
          padding: 16px 40px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .btn-secondary {
          background: none;
          border: 1px solid #1a1a1a;
          color: #1a1a1a;
          padding: 16px 40px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-secondary:hover {
          background: #1a1a1a;
          color: white;
          transform: translateY(-2px);
        }
        .stats-row {
          display: flex;
          align-items: center;
        }
        .stat-item {
          flex: 1;
          padding: 20px 0;
          border-top: 1px solid #e5e5e5;
        }
        .stat-item + .stat-item {
          margin-left: 32px;
          padding-left: 32px;
          border-left: 1px solid #e5e5e5;
        }
        .stat-num {
          font-size: 28px;
          font-weight: 300;
          color: #1a1a1a;
          display: block;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 10px;
          color: #999;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 2px;
          display: block;
        }
        .overlay-badge {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          min-width: 220px;
          transform: translateY(10px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s;
        }
        .hero-right:hover .overlay-badge {
          transform: translateY(0);
          opacity: 1;
        }
        .products-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: #e5e5e5;
          margin: 24px 0 0;
        }
        .product-card {
          background: #f9f9f7;
          overflow: hidden;
          cursor: pointer;
          position: relative;
        }
        .product-img-wrap {
          overflow: hidden;
          height: 320px;
          background: #f0f0ee;
        }
        .product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .product-card:hover .product-img-wrap img { transform: scale(1.06); }
        .product-info { padding: 20px; }
        .product-cat {
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #aaa;
          display: block;
          margin-bottom: 6px;
        }
        .product-name {
          font-size: 14px;
          font-weight: 400;
          color: #1a1a1a;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .product-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .product-price { font-size: 16px; font-weight: 300; color: #1a1a1a; }
        .product-old { font-size: 12px; color: #bbb; text-decoration: line-through; margin-left: 8px; }
        .product-add {
          width: 32px;
          height: 32px;
          background: #1a1a1a;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .product-card:hover .product-add { opacity: 1; transform: translateY(0); }
        .badge-sale {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #1a1a1a;
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 8px;
          text-transform: uppercase;
        }
        .badge-new {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #f0f0f0;
          color: #1a1a1a;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 8px;
          text-transform: uppercase;
        }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 64px 0;
        }
        .section-title {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1a1a1a;
        }
        .see-all {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #999;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s, gap 0.2s;
        }
        .see-all:hover { color: #1a1a1a; gap: 12px; }
      `}</style>

      <div className="hero-grid">
        <div className="hero-left">
          <div>
            <span className="hero-tag">Коллекция 2024</span>
          </div>
          <div>
            <h1 className="hero-title">
              Вещи<br />которые <em>говорят</em><br />за тебя
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, maxWidth: '320px', margin: 0 }}>
              Минималистичный дизайн. Безупречное качество. Одежда, в которой каждая деталь имеет значение.
            </p>
            <div className="hero-cta">
              <button className="btn-primary">Смотреть коллекцию</button>
              <button className="btn-secondary">Sale до −40%</button>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-num">4.8k</span>
                <span className="stat-label">Отзывов</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">120+</span>
                <span className="stat-label">Брендов</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">48h</span>
                <span className="stat-label">Доставка</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=85" alt="hero" />
          <div className="overlay-badge">
            <span style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: '6px' }}>Хит сезона</span>
            <p style={{ fontSize: '14px', color: '#1a1a1a', margin: '0 0 8px', fontWeight: 400 }}>Oversized Blazer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '18px', fontWeight: 300, color: '#1a1a1a' }}>12 490 ₽</span>
              <button style={{ background: '#1a1a1a', border: 'none', color: 'white', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', cursor: 'pointer' }}>Купить</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <span className="section-title">Лучшее этой недели</span>
        <a href="#" className="see-all">Смотреть все <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      </div>

      <div className="products-row">
        <div className="product-card">
          <div className="product-img-wrap">
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80" alt="p1" />
          </div>
          <span className="badge-sale">−30%</span>
          <div className="product-info">
            <span className="product-cat">Сумки</span>
            <p className="product-name">Leather Tote Bag</p>
            <div className="product-price-row">
              <div>
                <span className="product-price">8 990 ₽</span>
                <span className="product-old">12 800 ₽</span>
              </div>
              <button className="product-add">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-img-wrap">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="p2" />
          </div>
          <span className="badge-new">New</span>
          <div className="product-info">
            <span className="product-cat">Обувь</span>
            <p className="product-name">Air Runner Pro</p>
            <div className="product-price-row">
              <span className="product-price">14 500 ₽</span>
              <button className="product-add">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-img-wrap">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="p3" />
          </div>
          <div className="product-info">
            <span className="product-cat">Аксессуары</span>
            <p className="product-name">Minimal Steel Watch</p>
            <div className="product-price-row">
              <span className="product-price">23 000 ₽</span>
              <button className="product-add">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-img-wrap">
            <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" alt="p4" />
          </div>
          <span className="badge-sale">−20%</span>
          <div className="product-info">
            <span className="product-cat">Одежда</span>
            <p className="product-name">Cotton Oversized Tee</p>
            <div className="product-price-row">
              <div>
                <span className="product-price">3 200 ₽</span>
                <span className="product-old">4 000 ₽</span>
              </div>
              <button className="product-add">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero