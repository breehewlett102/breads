const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, baker}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker" defaultValue={bread.baker}>
              {bakers.map((baker) => {
                return(
                  <option value={baker.id} key={baker.id}>{baker.name}</option>
                )
              })}
              </select>

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.image}
          />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
        
        </form>
      </Default>
    )
}

<form action={`/breads/${index}?_method=PUT`} method="POST"> 
</form>


module.exports = Edit
