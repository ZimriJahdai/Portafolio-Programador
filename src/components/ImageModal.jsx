export default function ImageModal({ image, alt, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar imagen">×</button>
        <img src={image} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}
