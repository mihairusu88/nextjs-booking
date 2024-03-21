-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "type" TEXT,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personPhotos" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT,
    "personId" BIGINT,

    CONSTRAINT "personPhotos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" DOUBLE PRECISION,
    "person" TEXT,
    "imageUrl" TEXT,
    "servicePersonId" BIGINT,
    "message" VARCHAR,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicePerson" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "category" TEXT,
    "price" DOUBLE PRECISION DEFAULT 0,
    "reviews" BIGINT DEFAULT 0,
    "rating" REAL DEFAULT 0,
    "imageUrl" TEXT,
    "about" TEXT,
    "location" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" BIGINT,

    CONSTRAINT "servicePerson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personPhotos" ADD CONSTRAINT "public_personPhotos_personId_fkey" FOREIGN KEY ("personId") REFERENCES "servicePerson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "public_review_servicePersonId_fkey" FOREIGN KEY ("servicePersonId") REFERENCES "servicePerson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "servicePerson" ADD CONSTRAINT "public_servicePerson_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
