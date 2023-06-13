const resolveShapeType = (shape) => {
  switch (shape.type) {
    case "Box":
      return <boxGeometry />;
    case "Sphere":
      return <sphereGeometry />;
    case "Capsule":
      return <capsuleGeometry />;
    case "Circle":
      return <circleGeometry />;
    case "Cone":
      return <coneGeometry />;
    case "Cylinder":
      return <cylinderGeometry />;
    case "Dodecahedron":
      return <dodecahedronGeometry />;
    case "Icosahedron":
      return <icosahedronGeometry />;
    case "Octahedron":
      return <octahedronGeometry />;
    case "Plane":
      return <planeGeometry />;
    case "Ring":
      return <ringGeometry />;
    case "Tetrahedron":
      return <tetrahedronGeometry />;
    case "Torus":
      return <torusGeometry />;
    case "Torus Knot":
      return <torusKnotGeometry />;
    case "Tube":
      return <tubeGeometry />;
  }
};

export default resolveShapeType;
