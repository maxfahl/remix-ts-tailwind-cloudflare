/**
 *
 * Utility function to generate class names for components.
 *
 * Usage example:
 *
 * classNames(
 * 	'standard always there classes'
 * 	classNames // Possibly passed via props.
 * 	{'conditional': condition},
 * )
 *
 */
const classNames = (...definitions: any[]) => {
  const classes: string[] = []

  let item: any
  for (let i = 0; i < definitions.length; i++) {
    item = definitions[i] as any
    if (!item) continue
    switch (typeof item) {
      case 'string': {
        if (item) classes.push(item)
        break
      }
      case 'object': {
        if (Array.isArray(item)) {
          classes.push(...item)
        } else {
          for (const [key, value] of Object.entries(item)) {
            if (value) classes.push(key)
          }
        }
        break
      }
    }
  }

  return classes.join(' ')
}

export { classNames }
