/* @ds-bundle: {"format":4,"namespace":"AnavSouzabDesignSystem_3196b2","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ContactSection","sourcePath":"ui_kits/landing/ContactSection.jsx"},{"name":"Footer","sourcePath":"ui_kits/landing/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/landing/Hero.jsx"},{"name":"Nav","sourcePath":"ui_kits/landing/Nav.jsx"},{"name":"Services","sourcePath":"ui_kits/landing/Services.jsx"},{"name":"Testimonial","sourcePath":"ui_kits/landing/Testimonial.jsx"},{"name":"Work","sourcePath":"ui_kits/landing/Work.jsx"},{"name":"CarouselSlide","sourcePath":"ui_kits/social/CarouselSlide.jsx"},{"name":"QuoteCard","sourcePath":"ui_kits/social/QuoteCard.jsx"},{"name":"SocialPost","sourcePath":"ui_kits/social/SocialPost.jsx"},{"name":"StoryFrame","sourcePath":"ui_kits/social/StoryFrame.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"de5ba147102c","components/core/Button.jsx":"0930d95e320c","components/core/Icon.jsx":"c41062be2b67","components/core/IconButton.jsx":"da30ecdbcbf9","components/display/Badge.jsx":"d3883ec362c9","components/display/Card.jsx":"ea321fd0841f","components/display/Tag.jsx":"677f6de7c50f","components/feedback/Dialog.jsx":"677253073d2f","components/feedback/Toast.jsx":"e3af7dfc1aec","components/feedback/Tooltip.jsx":"8e344527a6e0","components/forms/Checkbox.jsx":"3f3644060278","components/forms/Input.jsx":"e085b45709b8","components/forms/Radio.jsx":"1de938e7d33c","components/forms/Select.jsx":"89d74c667d92","components/forms/Switch.jsx":"9e3efd5ea9e5","components/navigation/Tabs.jsx":"f58fcb1c0aa4","ui_kits/landing/ContactSection.jsx":"ef53089b8f01","ui_kits/landing/Footer.jsx":"91b2c0ce712d","ui_kits/landing/Hero.jsx":"b0a9ef83fc63","ui_kits/landing/Nav.jsx":"49227c946504","ui_kits/landing/Services.jsx":"c427ff6ed73d","ui_kits/landing/Testimonial.jsx":"cd030278d3cc","ui_kits/landing/Work.jsx":"e9d3f6f27154","ui_kits/social/CarouselSlide.jsx":"6d58eeb5befa","ui_kits/social/QuoteCard.jsx":"4873d6e1c3c5","ui_kits/social/SocialPost.jsx":"b802f03f2599","ui_kits/social/StoryFrame.jsx":"38203677caf8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnavSouzabDesignSystem_3196b2 = window.AnavSouzabDesignSystem_3196b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No logo exists for this brand yet. The wordmark IS the mark: the name set in
   Instrument Serif with tight tracking. When a real logo arrives, swap the
   rendering here and every surface updates at once. */
const SIZES = {
  sm: 20,
  md: 24,
  lg: 40,
  xl: 64
};
function Wordmark({
  size = 'md',
  tone = 'ink',
  as = 'span',
  href,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const color = {
    ink: 'var(--text-primary)',
    brand: 'var(--color-primary)',
    light: 'var(--text-on-dark)'
  }[tone];
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": "anav.souzab"
  }, rest, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: px,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }), "anav.souzab");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};
const CACHE = {};

/* Lucide (stroke 2, round caps) fetched from CDN and inlined, so the SVG's own
   stroke="currentColor" inherits the color set on the wrapper. No icon set was
   supplied with the brand sources — this is a documented substitution. */
function load(name) {
  if (!CACHE[name]) {
    CACHE[name] = fetch(`https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`).then(r => {
      if (!r.ok) {
        console.warn(`Icon: no Lucide glyph named "${name}"`);
        return '';
      }
      return r.text();
    }).then(t => t.replace(/\s(width|height)="[^"]*"/g, '').replace('<svg', '<svg width="100%" height="100%"')).catch(() => '');
  }
  return CACHE[name];
}
function Icon({
  name,
  size = 'md',
  color = 'currentColor',
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(t => {
      if (live) setSvg(t);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": rest['aria-label'] ? undefined : true
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      flex: '0 0 auto',
      color,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 'var(--text-small)',
    radius: 'var(--radius-sm)',
    gap: 8
  },
  md: {
    height: 44,
    padding: '0 24px',
    fontSize: 'var(--text-small)',
    radius: 'var(--radius-md)',
    gap: 8
  },
  lg: {
    height: 56,
    padding: '0 32px',
    fontSize: 'var(--text-body)',
    radius: 'var(--radius-md)',
    gap: 8
  }
};
const VARIANT = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--action-primary)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-ink)',
    border: '1px solid var(--color-accent)'
  },
  inverse: {
    background: 'var(--color-base)',
    color: 'var(--color-ink)',
    border: '1px solid var(--color-base)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)',
    borderColor: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--surface-sunken)'
  },
  ghost: {
    background: 'var(--action-ghost-hover)'
  },
  accent: {
    background: '#9C7942',
    borderColor: '#9C7942'
  },
  inverse: {
    background: 'var(--color-neutral-tint)',
    borderColor: 'var(--color-neutral-tint)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  as = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZE[size] || SIZE.md;
  const v = VARIANT[variant] || VARIANT.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      transform: active && !disabled ? 'scale(0.985)' : 'none',
      ...v,
      ...(hover && !disabled ? HOVER[variant] || {} : {}),
      ...(disabled ? {
        background: 'var(--surface-disabled)',
        color: 'var(--text-disabled)',
        borderColor: 'var(--surface-disabled)'
      } : {}),
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "sm"
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: "sm"
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: 32,
  md: 40,
  lg: 48
};
const GLYPH = {
  sm: 16,
  md: 20,
  lg: 20
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const px = SIZE[size] || SIZE.md;
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    solid: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--action-primary)'
    },
    veil: {
      background: 'var(--veil-light)',
      color: 'var(--color-ink)',
      border: '1px solid var(--border-subtle)',
      backdropFilter: 'var(--blur-veil)'
    }
  }[variant];
  const hoverStyle = {
    ghost: {
      background: 'var(--action-ghost-hover)'
    },
    outline: {
      background: 'var(--surface-sunken)'
    },
    solid: {
      background: 'var(--action-primary-hover)',
      borderColor: 'var(--action-primary-hover)'
    },
    veil: {
      background: 'var(--color-base)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: shape === 'round' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-base)',
      transform: active && !disabled ? 'scale(0.94)' : 'none',
      ...base,
      ...(hover && !disabled ? hoverStyle : {}),
      ...(disabled ? {
        color: 'var(--text-disabled)'
      } : {}),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: GLYPH[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  brand: {
    background: 'var(--color-primary-tint)',
    color: 'var(--color-primary)'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-secondary)'
  },
  accent: {
    background: 'var(--color-accent-tint)',
    color: '#7C6031'
  },
  positive: {
    background: '#E7EDE7',
    color: 'var(--status-positive)'
  },
  solid: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-brand)'
  }
};
function Badge({
  children,
  tone = 'brand',
  icon,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.brand;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: 'var(--space-2)',
  md: 'var(--space-3)',
  lg: 'var(--space-4)'
};
function Card({
  children,
  variant = 'plain',
  padding = 'md',
  radius = 'lg',
  interactive = false,
  media,
  mediaHeight = 200,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skin = {
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-none)'
    },
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    wash: {
      background: 'var(--surface-wash)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-none)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-inverse)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-none)'
    }
  }[variant];
  const r = radius === 'lg' ? 'var(--radius-lg)' : radius === 'md' ? 'var(--radius-md)' : 'var(--radius-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: r,
      overflow: 'hidden',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...skin,
      ...(interactive && hover ? {
        transform: 'translateY(-2px)',
        boxShadow: 'var(--shadow-lg)'
      } : {}),
      ...style
    }
  }), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      background: 'var(--surface-sunken)',
      backgroundImage: typeof media === 'string' ? `url(${media})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, typeof media === 'string' ? null : media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD[padding] || PAD.md
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active = false,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 28,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'lowercase',
      background: active ? 'var(--color-primary)' : hover ? 'var(--surface-sunken)' : 'transparent',
      color: active ? 'var(--text-on-brand)' : 'var(--text-secondary)',
      border: '1px solid ' + (active ? 'var(--color-primary)' : 'var(--border-subtle)'),
      transition: 'var(--transition-base)',
      ...style
    }
  }), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-3)',
      background: 'var(--scrim)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'none',
      ...style
    }
  }), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: '1.75rem',
      lineHeight: 1.15,
      fontWeight: 400
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, description) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-1)',
      marginTop: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    icon: 'info',
    color: 'var(--text-secondary)'
  },
  positive: {
    icon: 'circle-check',
    color: 'var(--status-positive)'
  },
  critical: {
    icon: 'circle-alert',
    color: 'var(--status-critical)'
  }
};
function Toast({
  children,
  title,
  tone = 'neutral',
  onClose,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minWidth: 280,
      maxWidth: 420,
      padding: '14px 16px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: "sm",
    color: t.color,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title ? 2 : 0,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-secondary)'
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = 'top',
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px, -50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 70,
      ...pos,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      lineHeight: 1.3,
      opacity: show ? 1 : 0,
      visibility: show ? 'visible' : 'hidden',
      transition: 'opacity var(--duration-fast) var(--ease-standard)',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    }
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 20px',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--surface-disabled)' : on ? 'var(--action-primary)' : 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--surface-disabled)' : on ? 'var(--action-primary)' : 'var(--border-strong)'),
      transition: 'var(--transition-base)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--text-on-brand)"
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  multiline = false,
  rows = 4,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 7), []);
  const Tag = multiline ? 'textarea' : 'input';
  const field = /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    rows: multiline ? rows : undefined,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: multiline ? undefined : 44,
      padding: multiline ? '12px 14px' : iconLeft ? '0 14px 0 40px' : '0 14px',
      paddingTop: multiline ? 12 : undefined,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: '1px solid ' + (error ? 'var(--status-critical)' : focus ? 'var(--border-focus)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      font: 'var(--weight-regular) var(--text-small)/' + (multiline ? '1.6' : '44px') + ' var(--font-body)',
      resize: multiline ? 'vertical' : undefined,
      transition: 'var(--transition-base)',
      ...style
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, iconLeft && !multiline ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "sm",
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      left: 14,
      top: 14
    }
  }) : null, field), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-critical)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    }
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 20px',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-pill)',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--surface-disabled)' : on ? 'var(--action-primary)' : 'var(--border-strong)'),
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: on && !disabled ? 'var(--action-primary)' : 'transparent',
      transform: on ? 'scale(1)' : 'scale(0.4)',
      transition: 'transform var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  placeholder,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'sel-' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 44,
      padding: '0 40px 0 14px',
      appearance: 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      font: 'var(--weight-regular) var(--text-small)/44px var(--font-body)',
      transition: 'var(--transition-base)',
      ...style
    }
  }), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "sm",
    color: "var(--text-secondary)",
    style: {
      position: 'absolute',
      right: 14,
      top: 14,
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    }
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 42,
      height: 24,
      flex: '0 0 42px',
      borderRadius: 'var(--radius-pill)',
      background: disabled ? 'var(--surface-disabled)' : on ? 'var(--action-primary)' : 'var(--color-neutral)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-base)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const first = items[0] && (items[0].value || items[0]);
  const isControlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const cur = isControlled ? value : inner;
  const pick = v => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'inline-flex',
      gap: variant === 'pill' ? 4 : 'var(--space-3)',
      padding: variant === 'pill' ? 4 : 0,
      background: variant === 'pill' ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      ...style
    }
  }), items.map(it => {
    const v = it.value || it;
    const l = it.label || it;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        background: variant === 'pill' && on ? 'var(--surface-card)' : 'transparent',
        border: 0,
        borderBottom: variant === 'underline' ? '2px solid ' + (on ? 'var(--color-primary)' : 'transparent') : 'none',
        borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
        padding: variant === 'pill' ? '8px 18px' : '0 0 10px',
        marginBottom: variant === 'underline' ? -1 : 0,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-small)',
        fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: on ? variant === 'pill' ? 'var(--text-primary)' : 'var(--text-brand)' : 'var(--text-secondary)',
        boxShadow: variant === 'pill' && on ? 'var(--shadow-xs)' : 'none',
        cursor: 'pointer',
        transition: 'var(--transition-base)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ContactSection.jsx
try { (() => {
function ContactSection({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Contato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 'var(--leading-display-lg)'
    }
  }, "Vamos conversar?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: '38ch',
      fontSize: 'var(--text-body)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Me conta em duas linhas o que voc\xEA precisa. Respondo em at\xE9 dois dias \xFAteis com um caminho poss\xEDvel.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Nome",
    iconLeft: "user",
    placeholder: "Como te chamo?",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "E-mail",
    iconLeft: "mail",
    type: "email",
    placeholder: "voce@email.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Tipo de projeto",
    placeholder: "Escolha uma op\xE7\xE3o",
    options: ['Landing page completa', 'Identidade visual', 'Consultoria']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Mensagem",
    multiline: true,
    rows: 4,
    placeholder: "Onde voc\xEA est\xE1 travada hoje?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Quero receber a newsletter",
    description: "Uma carta por m\xEAs sobre design e escrita."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Enviar mensagem")))));
}
Object.assign(__ds_scope, { ContactSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginLeft: 'auto'
    }
  }, ['Projetos', 'Serviços', 'Sobre', 'Escrita'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "instagram",
    label: "Instagram",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "linkedin",
    label: "LinkedIn",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "mail",
    label: "E-mail",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 \xB7 S\xE3o Paulo, BR")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand",
    icon: "sparkles"
  }, "Duas vagas para mar\xE7o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-xl)',
      lineHeight: 'var(--leading-display-xl)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Landing pages que convertem ", /*#__PURE__*/React.createElement("em", null, "sem gritar")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: '46ch',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Estrat\xE9gia, tipografia e c\xF3digo no mesmo lugar. Eu desenho e entrego a p\xE1gina inteira \u2014 da primeira conversa ao deploy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-1)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onContact
  }, "Agendar conversa"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary"
  }, "Ver portf\xF3lio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "3 SEMANAS EM M\xC9DIA"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "+40 P\xC1GINAS ENTREGUES"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/ana-hero-4x5.png",
    alt: "Ana V. Souza B.",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, "retrato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: 1.1
    }
  }, "Ana V. Souza B.")))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Nav.jsx
try { (() => {
function Nav({
  onContact
}) {
  const links = ['Projetos', 'Serviços', 'Sobre', 'Escrita'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--veil-light)',
      backdropFilter: 'var(--blur-veil)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    href: "#",
    size: "md"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "instagram",
    label: "Instagram"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onContact
  }, "Agendar conversa"))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
const ITEMS = [{
  icon: 'panels-top-left',
  t: 'Landing page completa',
  d: 'Estratégia, copy, design e código entregues em três semanas.',
  p: 'a partir de R$ 6.400'
}, {
  icon: 'palette',
  t: 'Identidade visual',
  d: 'Tipografia, paleta e aplicações para marcas que estão começando.',
  p: 'a partir de R$ 4.900',
  featured: true
}, {
  icon: 'compass',
  t: 'Consultoria',
  d: 'Duas horas para destravar posicionamento, página ou fluxo.',
  p: 'R$ 890'
}];
function Services({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Como trabalhamos juntas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 'var(--leading-display-lg)'
    }
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, ITEMS.map(s => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: s.t,
    variant: s.featured ? 'raised' : 'plain',
    padding: "lg",
    interactive: true,
    onClick: onContact
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary-tint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: "md",
    color: "var(--color-primary)"
  })), s.featured ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, "Mais procurado") : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.15
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      color: 'var(--text-brand)'
    }
  }, s.p)))));
}
Object.assign(__ds_scope, { Services });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Testimonial.jsx
try { (() => {
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      lineHeight: 1,
      color: 'var(--color-secondary)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 1.2,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Ela entendeu em uma conversa o que eu tentava explicar h\xE1 um ano. A p\xE1gina nova pagou o investimento em seis semanas."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-neutral)'
    }
  }, "Marina Rocha \xB7 M\xE9todo Raiz")));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Work.jsx
try { (() => {
/* One real project. When more arrive, switch to the 2-up grid and bring the
   pill Tabs filter back — the components are already in the system. */
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-wash)',
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Projeto em destaque"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 'var(--leading-display-lg)'
    }
  }, "Trabalho recente"), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "plain",
    padding: "lg",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 0.75fr',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/projects/laisconsuelo-desktop.png",
    alt: "La\xEDs Consuelo \u2014 landing page desktop",
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '16 / 10',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 34,
      lineHeight: 1.1
    }
  }, "La\xEDs Consuelo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 'var(--text-small)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Landing page para uma biom\xE9dica esteta em Manaus. Posicionamento, copy e tabela de procedimentos numa p\xE1gina s\xF3, com agendamento direto pelo WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "landing page"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "copy"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "identidade")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    iconRight: "arrow-up-right",
    style: {
      padding: 0
    }
  }, "Ver o projeto")))))));
}
Object.assign(__ds_scope, { Work });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/CarouselSlide.jsx
try { (() => {
/* 1080×1350 carousel slide, four kinds. */
function CarouselSlide({
  kind = 'body',
  index,
  total,
  eyebrow,
  title,
  body,
  cta,
  theme = 'light'
}) {
  const dark = theme === 'dark';
  const brand = theme === 'brand';
  const bg = dark ? 'var(--surface-inverse)' : brand ? 'var(--color-primary)' : theme === 'wash' ? 'var(--surface-wash)' : 'var(--surface-page)';
  const fg = dark || brand ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const soft = dark || brand ? 'var(--color-secondary)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      padding: 88,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: kind === 'cover' || kind === 'cta' ? 'flex-end' : 'center',
      gap: 32,
      position: 'relative',
      overflow: 'hidden'
    }
  }, kind === 'cover' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      top: 88,
      fontFamily: 'var(--font-mono)',
      fontSize: 26,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: soft
    }
  }, eyebrow) : null, kind === 'number' && index ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 200,
      lineHeight: 0.9,
      color: brand || dark ? 'var(--color-secondary)' : 'var(--color-primary)'
    }
  }, String(index).padStart(2, '0')) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.015em',
      fontSize: kind === 'cover' ? 116 : 76,
      lineHeight: 1.05
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      fontSize: 40,
      lineHeight: 1.5,
      color: dark || brand ? 'var(--color-neutral)' : 'var(--text-secondary)'
    }
  }, body) : null, kind === 'cta' && cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      alignItems: 'center',
      gap: 16,
      padding: '26px 44px',
      borderRadius: 999,
      background: dark || brand ? 'var(--color-base)' : 'var(--color-primary)',
      color: dark || brand ? 'var(--color-ink)' : 'var(--color-base)',
      fontSize: 34,
      fontWeight: 500
    }
  }, cta) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      right: 88,
      bottom: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      letterSpacing: '0.08em',
      color: soft
    }
  }, /*#__PURE__*/React.createElement("span", null, "anav.souzab"), index && total ? /*#__PURE__*/React.createElement("span", null, index, " / ", total) : /*#__PURE__*/React.createElement("span", null)));
}
Object.assign(__ds_scope, { CarouselSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/CarouselSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/QuoteCard.jsx
try { (() => {
/* 1080×1080 quote / testimonial card. */
function QuoteCard({
  quote = 'A página nova pagou o investimento em seis semanas.',
  author = 'Marina Rocha',
  role = 'Método Raiz',
  theme = 'wash'
}) {
  const dark = theme === 'dark';
  const bg = dark ? 'var(--surface-inverse)' : theme === 'wash' ? 'var(--surface-wash)' : 'var(--surface-page)';
  const fg = dark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      boxSizing: 'border-box',
      padding: 110,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 160,
      lineHeight: 0.6,
      color: dark ? 'var(--color-secondary)' : 'var(--color-primary)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 82,
      lineHeight: 1.12,
      letterSpacing: '-0.015em'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 2,
      background: dark ? 'var(--color-secondary)' : 'var(--color-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 26,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: dark ? 'var(--color-neutral)' : 'var(--text-secondary)'
    }
  }, author, " \xB7 ", role)));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialPost.jsx
try { (() => {
/* 1080×1080 feed post. Rendered at 1080 and scaled by the host frame. */
function SocialPost({
  eyebrow = 'design & escrita',
  title = 'Sua landing não precisa gritar para vender',
  kicker = 'anav.souzab',
  theme = 'light',
  badge,
  photo
}) {
  const dark = theme === 'dark';
  const brand = theme === 'brand';
  const bg = dark ? 'var(--surface-inverse)' : brand ? 'var(--color-primary)' : 'var(--surface-page)';
  const fg = dark || brand ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const soft = dark || brand ? 'var(--color-secondary)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      boxSizing: 'border-box',
      padding: 96,
      background: bg,
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 470,
      height: 1080,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -180,
      top: -180,
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: brand ? 'rgba(250,246,244,.07)' : dark ? 'rgba(217,166,160,.10)' : 'var(--surface-wash)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 26,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: soft
    }
  }, eyebrow), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: dark || brand ? 'solid' : 'brand',
    style: {
      height: 40,
      fontSize: 20,
      padding: '0 18px'
    }
  }, badge) : null), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'relative',
      margin: 0,
      maxWidth: photo ? 520 : undefined,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: photo ? 80 : 108,
      lineHeight: 1.02,
      letterSpacing: '-0.015em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      letterSpacing: '-0.02em'
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      height: 4,
      background: brand ? 'var(--color-secondary)' : 'var(--color-primary)'
    }
  })));
}
Object.assign(__ds_scope, { SocialPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/StoryFrame.jsx
try { (() => {
/* 1080×1920 story. Safe area: 250px top, 320px bottom. */
function StoryFrame({
  eyebrow = 'novo no blog',
  title = 'Como eu precifico uma landing page',
  cta = 'arrasta pra cima',
  theme = 'brand',
  photo
}) {
  const dark = theme === 'dark';
  const brand = theme === 'brand';
  const bg = brand ? 'linear-gradient(165deg, var(--color-primary), var(--color-ink))' : dark ? 'var(--surface-inverse)' : 'var(--surface-page)';
  const fg = brand || dark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      boxSizing: 'border-box',
      background: bg,
      color: fg,
      position: 'relative',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: photo ? 1100 : 700,
      background: 'var(--protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      right: 88,
      top: 250
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: brand || dark ? 'var(--color-secondary)' : 'var(--color-primary)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      right: 88,
      bottom: 460
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 124,
      lineHeight: 1.02,
      letterSpacing: '-0.02em'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88,
      right: 88,
      bottom: 320,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '26px 48px',
      borderRadius: 999,
      background: 'var(--veil-light)',
      backdropFilter: 'var(--blur-veil)',
      color: 'var(--color-ink)',
      fontSize: 34,
      fontWeight: 500
    }
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      letterSpacing: '-0.02em',
      opacity: 0.9
    }
  }, "anav.souzab")));
}
Object.assign(__ds_scope, { StoryFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/StoryFrame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ContactSection = __ds_scope.ContactSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Services = __ds_scope.Services;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Work = __ds_scope.Work;

__ds_ns.CarouselSlide = __ds_scope.CarouselSlide;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.SocialPost = __ds_scope.SocialPost;

__ds_ns.StoryFrame = __ds_scope.StoryFrame;

})();
