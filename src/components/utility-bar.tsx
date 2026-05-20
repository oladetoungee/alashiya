// Ministry of Culture / Accessibility have no destinations yet — rendered
// as buttons so a click stays put rather than 404-ing.
export function UtilityBar() {
  return (
    <div className="bg-olive text-olive-ink">
      <div className="flex items-center justify-between px-6 py-2 lg:px-20">
        <div className="flex items-center gap-8">
          <button
            type="button"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            Ministry of Culture
          </button>
          <button
            type="button"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            Accessibility
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            EN
          </button>
          <button
            type="button"
            className="type-body font-medium text-olive-ink/40 transition-opacity hover:opacity-100"
          >
            GR
          </button>
        </div>
      </div>
    </div>
  );
}
