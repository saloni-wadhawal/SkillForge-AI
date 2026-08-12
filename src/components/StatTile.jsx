import Icon from './Icon.jsx'

// One tile in a `.stat-grid`. Every page that shows numbers uses this, so a
// tweak to the tile lands everywhere instead of in five slightly different
// copies — and the emoji that used to sit inside the number is now a real icon.
export default function StatTile({ icon, value, label, foot }) {
  return (
    <div className="stat-tile">
      {icon && (
        <span className="stat-icon">
          <Icon name={icon} size={18} />
        </span>
      )}
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
      {foot && <div className="stat-foot">{foot}</div>}
    </div>
  )
}
