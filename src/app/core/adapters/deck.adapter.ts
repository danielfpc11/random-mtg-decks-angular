import { Deck } from '../models';

export class DeckAdapter {

  public static adaptResponseBody(data: any): Deck {
    return {
      id: data.persistenceId,
      mainCardId: data.mainCardId,
      mainCardIdIsCardFace: data.mainCardIdIsCardFace,
      publicUrl: data.publicUrl,
      publicMainCardImageUrl: data.publicMainCardImageUrl
    };
  }

  public static adaptRequestBody(deck: Deck): any {
    return {
      persistenceId: deck.id,
      mainCardId: deck.mainCardId,
      mainCardIdIsCardFace: deck.mainCardIdIsCardFace,
      publicUrl: deck.publicUrl,
      publicMainCardImageUrl: deck.publicMainCardImageUrl,
    };
  }

}
