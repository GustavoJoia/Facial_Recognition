
export function translate(expression) {
    
    switch (expression) {
      case 'neutral':
        return 'Neutra';
      case 'happy':
        return 'Feliz';
      case 'sad':
        return 'Triste';
      case 'surprised':
        return 'Surpresa';
      case 'angry':
        return 'Brava';
      case 'disgusted':
        return 'Desgostosa';
      case 'fearful':
        return 'Amedrontada';
      case 'none':
        return 'Expressão desconhecida';
      default:
        return 'Expressão Desconhecida';
    }
  }