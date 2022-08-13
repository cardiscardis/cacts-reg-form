/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
		
		if (stepNumber === 5) {
			//console.log("Im here");
			const f = document.querySelector("form");
			//1. Basic
			f.namePrint.value = f.name.value;
			f.addressPrint.value = f.address.value;
			f.p_addressPrint.value = f.p_address.value;
			f.telephonePrint.value = f.telephone.value;
			f.birthDatePrint.value = f.birthDate.value;
			f.birthPlacePrint.value = f.birthPlace.value;
			f.lgaPrint.value = f.lga.value;
			f.originStatePrint.value = f.originState.value;
			f.nationalityPrint.value = f.nationality.value;
			f.maritalStatusPrint.value = f.maritalStatus.value;
			f.marriageTypePrint.value = f.marriageType.value;
			f.spouseNamePrint.value = f.spouseName.value;
			f.childNamePrint.value = f.childName.value;
			f.fatherNamePrint.value = f.fatherName.value;
			f.fatherAddressPrint.value = f.fatherAddress.value;
			f.fatherOccupationPrint.value = f.fatherOccupation.value;
			f.fatherNumberPrint.value = f.fatherNumber.value;
			f.fatherReligionPrint.value = f.fatherReligion.value;
			f.motherNamePrint.value = f.motherName.value;
			f.motherAddressPrint.value = f.motherAddress.value;
			f.motherOccupationPrint.value = f.motherOccupation.value;
			f.motherNumberPrint.value = f.motherNumber.value;
			f.motherReligionPrint.value = f.motherReligion.value;
			//2. personal details
			f.bornAgainChoice.value === ("YES" || "NO") ? f.bornAgainChoicePrint.value = f.bornAgainChoice.value : f.bornAgainChoicePrint.value = "No Data";
			f.bornAgainDatePrint.value = f.bornAgainDate.value;
			f.denominationNamePrint.value = f.denominationName.value;
			f.denominationDurationPrint.value = f.denominationDuration.value;
			f.spiritChoice.value === ("YES" || "NO") ? f.spiritChoicePrint = f.spiritChoice.value : f.spiritChoicePrint = "No Data";
			f.fruitOfSpiritPrint.value = f.fruitOfSpirit.value;
			f.spiritualGiftPrint.value = f.spiritualGift.value;
			f.callingChoicePrint.value = f.callingChoice.value;
			f.deptFunctioningPrint.value = f.deptFunctioning.value;
			f.alreadyInMinistryChoice.value === ("YES" || "NO") ? f.alreadyInMinistryChoicePrint.value = f.alreadyInMinistryChoice.value : f.alreadyInMinistryChoicePrint.value = "No Data";
			f.howLongInMinistryPrint.value = f.howLongInMinistry.value;
			f.churchNameOfWorkPrint.value = f.churchNameOfWork.value;
			f.disciplinedByChurchChoice.value === ("YES" || "NO") ? f.disciplinedByChurchChoicePrint.value = f.disciplinedByChurchChoice.value : f.disciplinedByChurchChoicePrint.value = "No Data";
			f.offenceDisciplinedForPrint.value = f.offenceDisciplinedFor.value;
			f.professionPrint.value = f.profession.value;
			f.convictedChoice.value === ("YES" || "NO") ? f.convictedChoicePrint.value = f.convictedChoice.value : f.convictedChoicePrint.value = "No Data";
			f.gambleChoice.value === ("YES" || "NO") ? f.gambleChoicePrint.value = f.gambleChoice.value : f.gambleChoicePrint.value = "No Data";
			f.drugStatus.value === ("YES" || "NO") ? f.drugStatusPrint.value = f.drugStatus.value : f.drugStatusPrint.value = "No Data";
			f.healthStatus.value === ("YES" || "NO") ? f.healthStatusPrint.value = f.healthStatus.value : f.healthStatusPrint.value = "No Data";
			f.healthStatusExplainPrint.value = f.healthStatusExplain.value;
			f.rulesAcceptance.value === ("YES" || "NO") ? f.rulesAcceptancePrint.value = f.rulesAcceptance.value : f.rulesAcceptancePrint.value = "No Data";
			f.disciplineAcceptance.value === ("YES" || "NO") ? f.disciplineAcceptancePrint.value = f.disciplineAcceptance.value: f.disciplineAcceptancePrint.value = "No Data";
			//3. finance
			f.otherDependencyOnYou.value === ("YES" || "NO") ? f.otherDependencyOnYouPrint.value  = f.otherDependencyOnYou.value : f.otherDependencyOnYouPrint.value  = "No Data";
			f.sponsorPrint.value = f.sponsor.value;
			//4. education
			f.programmeOfStudyPrint.value = f.programmeOfStudy.value;
				//school attended
			f.schoolName1Print.value = f.schoolName1.value;
			f.schDuration1Print.value = f.schDuration1.value;
			f.certObtained1Print.value = f.certObtained1.value;
			f.schoolName2Print.value = f.schoolName2.value;
			f.schDuration2Print.value = f.schDuration2.value;
			f.certObtained2Print.value = f.certObtained2.value;
			f.schoolName3Print.value = f.schoolName3.value;
			f.schDuration3Print.value = f.schDuration3.value;
			f.certObtained3Print.value = f.certObtained3.value;
			f.schoolName4Print.value = f.schoolName4.value;
			f.schDuration4Print.value = f.schDuration4.value;
			f.certObtained4Print.value = f.certObtained4.value;
			//5. personal reference
				//referee 1
			/*f.refereeRelationship1Print.value = f.refereeRelationship1.value;
			f.refereeRelationshipPeriod1Print.value = f.refereeRelationshipPeriod1.value;
			f.refChristianTestimony1Print.value = f.refChristianTestimony1.value;
			f.refChristianTestimonyPeriod1Print.value = f.refChristianTestimonyPeriod1.value;
			f.refGiftTestimony1Print.value = f.refGiftTestimony1.value;
			f.refMoralTestimony1Print.value = f.refMoralTestimony1.value;
			f.refComment1Print.value = f.refComment1.value;
			f.refRecommendation1Print.value = f.refRecommendation1.value;
			f.refereeName1Print.value = f.refereeName1.value;
			f.refereeAddress1Print.value = f.refereeAddress1.value;
			f.refereePhone1Print.value = f.refereePhone1.value;
			f.refereeSign1Print.value = f.refereeSign1.value;
			f.referralDate1Print.value = f.referralDate1.value;*/
				//referee 2
			/*f.refereeRelationship2Print.value = f.refereeRelationship12.value;
			f.refereeRelationshipPeriod2Print.value = f.refereeRelationshipPeriod2.value;
			f.refChristianTestimony2Print.value = f.refChristianTestimony2.value;
			f.refChristianTestimonyPeriod2Print.value = f.refChristianTestimonyPeriod2.value;
			f.refGiftTestimony2Print.value = f.refGiftTestimony2.value;
			f.refMoralTestimony2Print.value = f.refMoralTestimony2.value;
			f.refComment2Print.value = f.refComment2.value;
			f.refRecommendation2Print.value = f.refRecommendation2.value;
			f.refereeName2Print.value = f.refereeName2.value;
			f.refereeAddress2Print.value = f.refereeAddress2.value;
			f.refereePhone2Print.value = f.refereePhone2.value;
			f.refereeSign2Print.value = f.refereeSign2.value;
			f.referralDate2Print.value = f.referralDate2.value;*/
			//6. official use
			//f.programAppliedForPrint.value = f.programAppliedFor.value;
	
		}
    });
});

document.querySelector("form").onsubmit = (e) => {
	e.preventDefault();
	document.querySelector(".form-stepper-horizontal").style.display = "none";
	document.querySelector("#lastButtons").style.display = "none";
	window.print();
}