SVG.extend(SVG.Parent, {
  flatten: function(parent, depth) {
    if(depth === 0 || this instanceof SVG.Defs) return this

    parent = parent || (this instanceof SVG.Doc ? this : this.parent(SVG.Parent))
    depth = depth || Infinity

    this.each(function(){
      if(this instanceof SVG.Defs) return this
      if(this instanceof SVG.Parent) return this.flatten(parent, depth-1)
      return this.toParent(parent)
    })
    
    this.node.firstChild || this.remove()

    return this
  }
})