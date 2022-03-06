-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "positionType" TEXT NOT NULL,
    "primaryTag" TEXT NOT NULL,
    "jobTags" TEXT[],
    "jobLocation" TEXT NOT NULL,
    "showCompanyLogo" BOOLEAN NOT NULL,
    "emailToCandidates" BOOLEAN NOT NULL,
    "getMatches" BOOLEAN NOT NULL,
    "highlightPost" BOOLEAN NOT NULL,
    "stickForDuration" INTEGER NOT NULL,
    "jobPostDuration" INTEGER NOT NULL,
    "invoiceDetailsStateCompanyId" TEXT NOT NULL,
    "jobDetailsStateCompanyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceDetailsState" (
    "companyId" TEXT NOT NULL,
    "companyInvoiceEmail" TEXT NOT NULL,
    "emailListToSendInvoice" TEXT[],
    "invoiceAddress" TEXT NOT NULL,
    "invoiceNotesPurchaseOrder" TEXT NOT NULL,
    "payLater" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "JobDetailsState" (
    "companyId" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "highlightWithCompanyColor" BOOLEAN NOT NULL,
    "minAnnualSalary" INTEGER NOT NULL,
    "maxAnnualSalary" INTEGER NOT NULL,
    "jobDescriptionCompanyId" TEXT,
    "applyURL" TEXT NOT NULL,
    "applyEmail" TEXT NOT NULL,
    "howToApplyCompanyId" TEXT
);

-- CreateTable
CREATE TABLE "HowToApply" (
    "companyId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "html" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JobDescription" (
    "companyId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "html" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "InvoiceDetailsState_companyId_key" ON "InvoiceDetailsState"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "JobDetailsState_companyId_key" ON "JobDetailsState"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "HowToApply_companyId_key" ON "HowToApply"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "JobDescription_companyId_key" ON "JobDescription"("companyId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_invoiceDetailsStateCompanyId_fkey" FOREIGN KEY ("invoiceDetailsStateCompanyId") REFERENCES "InvoiceDetailsState"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_jobDetailsStateCompanyId_fkey" FOREIGN KEY ("jobDetailsStateCompanyId") REFERENCES "JobDetailsState"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobDetailsState" ADD CONSTRAINT "JobDetailsState_howToApplyCompanyId_fkey" FOREIGN KEY ("howToApplyCompanyId") REFERENCES "HowToApply"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobDetailsState" ADD CONSTRAINT "JobDetailsState_jobDescriptionCompanyId_fkey" FOREIGN KEY ("jobDescriptionCompanyId") REFERENCES "JobDescription"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;
