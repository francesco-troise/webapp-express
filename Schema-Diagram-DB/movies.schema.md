# Table: Movies

**Entity:** Movie

## Description

Rappresenta i film presenti nel database.

---

## Columns

| Column       | Type         | Constraints                                           | Description                                     |
| ------------ | ------------ | ----------------------------------------------------- | ----------------------------------------------- |
| id           | INT          | PK, AI, UNIQUE, NOT NULL                              | Identificativo univoco del film                 |
| title        | VARCHAR(255) | NOT NULL                                              | Titolo del film                                 |
| director     | VARCHAR(255) | NULL                                                  | Nome del regista                                |
| genre        | VARCHAR(255) | NULL                                                  | Genere cinematografico                          |
| release_year | YEAR         | NULL                                                  | Anno di uscita del film                         |
| abstract     | TEXT         | NULL                                                  | Trama o descrizione del film                    |
| image        | VARCHAR(255) | NULL                                                  | URL o path dell’immagine associata              |
| created_at   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP                             | Data e ora di creazione della riga              |
| updated_at   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Data e ora dell’ultimo aggiornamento automatico |

---
