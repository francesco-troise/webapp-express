# Table: Reviews

**Entity:** Review

## Description

Rappresenta le recensioni associate ai film.

## Columns

| Column     | Type         | Constraints                                           | Description                                             |
| ---------- | ------------ | ----------------------------------------------------- | ------------------------------------------------------- |
| id         | INT          | PK, AI, UNIQUE, NOT NULL                              | Identificativo univoco della recensione                 |
| movie_id   | INT          | NOT NULL, FK (movies.id)                              | Identificativo del film a cui è associata la recensione |
| name       | VARCHAR(255) | NOT NULL                                              | Nome dell’autore della recensione                       |
| vote       | TINYINT      | NOT NULL                                              | Voto numerico assegnato al film                         |
| text       | TEXT         | NULL                                                  | Testo della recensione                                  |
| created_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP                             | Data e ora di creazione della riga                      |
| updated_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Data e ora dell’ultimo aggiornamento automatico         |

---
